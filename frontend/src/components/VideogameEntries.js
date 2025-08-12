const VideogameEntries = ({ videogame }) => {
    return(
        <div className="videogame-details">
            <h4>{videogame.title}</h4>
            <p><strong>Genre: </strong></p>
            <p><strong>Rating: </strong></p>
            <p><strong>Overview: </strong></p>
            <p>{videogame.createdAt}</p>
        </div>
    )
}

export default VideogameEntries