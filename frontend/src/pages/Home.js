import { useEffect, useState } from "react"

const Home = () => {

    const [videogames, setVideogames] = useState(null)

useEffect(() => {
    const fetchEntries = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/videogames');
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
                <p key={videogame._id}>{videogame.title}</p>
            ))}
        </div>
    </div>
    )
}

export default Home