import { useVideogameContext } from '../hooks/useVideogameContexts'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const VideogameEntries = ({ videogame }) => {
    const { dispatch } = useVideogameContext()

    const handleClick = async () => {
        const response = await fetch('/api/videogames/' + videogame._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_VIDEOGAME', payload: json})
        }
    }

    return(
        <div className="videogame-details">
            {videogame.image && (
                <img
                    src={videogame.image}
                    alt={videogame.title}
                    className='videogame-image'
                    style={{ maxWidth: "200px", borderRadius: "8px", marginBottom: "10px" }}
                />
            )}
            <h4>{videogame.title}</h4>
            <p><strong>Genre: </strong>{videogame.genre}</p>
            <p><strong>Rating: </strong>{videogame.rating}</p>
            <p><strong>Overview: </strong>{videogame.overView}</p>
            <p>{formatDistanceToNow(new Date(videogame.createdAt), {addSuffix: true})}</p>
            <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
        </div>
    )
}

export default VideogameEntries