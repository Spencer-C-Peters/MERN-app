import { useEffect } from "react"
import { useVideogameContext } from "../hooks/useVideogameContexts"

//Components
import VideogameEntries from '../components/VideogameEntries'
import VideogameForm from '../components/VideogameForm'

const Home = () => {

    const { videogames, dispatch} = useVideogameContext()

useEffect(() => {
    const fetchEntries = async () => {
        try {
            const response = await fetch('/api/videogames')
            const json = await response.json()

            if (response.ok) {
                console.log("Fetched data:", json);
                dispatch({type: 'SET_VIDEOGAMES', payload: json})
            } else {
                console.error("Failed to fetch:", json)
            }
        } catch (err) {
            console.error("Fetch error:", err)
        }
    }

    fetchEntries()
}, [dispatch])

    return (
    <div className="home">
        <div className="videogames">
            {videogames && videogames.map((videogame) => (
                <VideogameEntries key={videogame._id} videogame={videogame} /> 
            ))}
        </div>
        <VideogameForm />
    </div>
    )
}

export default Home