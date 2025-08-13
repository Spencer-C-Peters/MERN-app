import { useState } from 'react'
import { useVideogameContext } from '../hooks/useVideogameContexts'

const VideogameForm = () => {
    const { dispatch } = useVideogameContext()

    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [rating, setRating] = useState('')
    const [overView, setOverview] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const videogame = {title, genre, rating, overView}

        const response = await fetch('/api/videogames', {
            method: 'POST',
            body: JSON.stringify(videogame),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setGenre('')
            setRating('')
            setOverview('')
            setError(null)
            console.log('New Entry Created', json)
            dispatch({type: 'CREATE_VIDEOGAME', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create a new Videogame Entry</h3>

        <label>Videogame Title</label>
        <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title} 
        />
        <label>Genre</label>
        <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre} 
        />
        <label>Rating</label>
        <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating} 
        />
        <label>Overview</label>
        <input
            type="text"
            onChange={(e) => setOverview(e.target.value)}
            value={overView} 
        />

        <button>Create Entry</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default VideogameForm