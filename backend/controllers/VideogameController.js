const Videogame = require('../models/VideogameModel')

//Get all Videgames function

//Get a Single Videogame function

//Create a new Videogame entry function
const createVideogame = async (req, res) => {
    const {title, genre, rating, overView} = req.body

    try{
        const videogame = await Videogame.create({title, genre, rating, overView})
        res.status(200).json(videogame)
    }
    catch (error){
        res.status(400).json({error: error.mssg})
    }
}

//Update a Videogame entry function

//Delete a Videogame entry function