const Videogame = require('../models/VideogameModel')

//Get all Videgames function
const getAllVidegames = async (req, res) => {
    const videogames = Videogame.find({}).sort({createdAt: -1})
    
    res.status(200).json(videogames)
}

//Get a Single Videogame function

//Create a new Videogame entry function
const createVideogame = async (req, res) => {
    const {title, genre, rating, overView} = req.body

    //Add a document to the database
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

module.exports = {
    createVideogame,
    getAllVidegames
}