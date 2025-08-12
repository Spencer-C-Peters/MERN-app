import { useEffect, useState } from "react"

//Components
import VideogameEntries from '../components/VideogameEntries'
import VideogameForm from '../components/VideogameForm'

const Home = () => {

    const [videogames, setVideogames] = useState(null)

useEffect(() => {
    const fetchEntries = async () => {
        try {
            const response = await fetch('/api/videogames')
            const json = await response.json()

            if (response.ok) {
                console.log("Fetched data:", json);
                setVideogames(json)
            } else {
                console.error("Failed to fetch:", json)
            }
        } catch (err) {
            console.error("Fetch error:", err)
        }
    }

    fetchEntries()
}, [])

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