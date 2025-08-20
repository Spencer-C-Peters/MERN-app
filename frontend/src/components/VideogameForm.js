import { useState } from 'react'
import { useVideogameContext } from '../hooks/useVideogameContexts'

const VideogameForm = () => {
    const { dispatch } = useVideogameContext()

    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [rating, setRating] = useState('')
    const [overView, setOverview] = useState('')
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('genre', genre)
        formData.append('rating', rating)
        formData.append('overView', overView)
        if (image) {
            formData.append('image', image)
        }

        const response = await fetch('/api/videogames', {
            method: 'POST',
            body: formData
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setGenre('')
            setRating('')
            setOverview('')
            setImage(null)
            setError(null)
            setEmptyFields([])
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
            className={Array.isArray(emptyFields) && emptyFields.includes('title') ? 'error': ''}
        />
        <label>Genre</label>
        <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre} 
            className={Array.isArray(emptyFields) && emptyFields.includes('genre') ? 'error': ''}
        />
        <label>Rating</label>
        <input
            type="number"
            onChange={(e) => setRating(e.target.value)}
            value={rating} 
            className={Array.isArray(emptyFields) && emptyFields.includes('rating') ? 'error': ''}
        />
        <label>Overview</label>
        <input
            type="text"
            onChange={(e) => setOverview(e.target.value)}
            value={overView} 
            className={Array.isArray(emptyFields) && emptyFields.includes('overView') ? 'error': ''}
        />

        <label>Upload Image</label>
        <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
        />

        <button>Create Entry</button>
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default VideogameForm