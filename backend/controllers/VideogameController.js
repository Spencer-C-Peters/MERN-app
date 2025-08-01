const { json } = require('express')
const Videogame = require('../models/VideogameModel')
const mongoose = require('mongoose')

//Get all Videgames function
const getAllVidegames = async (req, res) => {
    const videogames = await Videogame.find({}).sort({createdAt: -1})
    
    res.status(200).json(videogames)
}

//Get a Single Videogame function
const getVideogames = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const videogame = await Videogame.findById(id)

    if(!videogame){
        return res.status(400).json({error: "No such workout"})
    }

    res.status(200).json(videogame)
}

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
    getAllVidegames,
    getVideogames
}