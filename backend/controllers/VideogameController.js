const { json } = require('express')
const Videogame = require('../models/VideogameModel')
const mongoose = require('mongoose')
const cloudinary = require('../utils/cloudinary')

//Get all Videgames function
const getAllVidegames = async (req, res) => {
    const videogames = await Videogame.find({}).sort({createdAt: -1})
    
    res.status(200).json(videogames)
}

//Get a Single Videogame function
const getVideogames = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such videogame"})
    }

    const videogame = await Videogame.findById(id)

    if(!videogame){
        return res.status(400).json({error: "No such videogame"})
    }

    res.status(200).json(videogame)
}

//Create a new Videogame entry function
const createVideogame = async (req, res) => {
    const {title, genre, rating, overView} = req.body
    let imageUrl = null

    let emptyFields = []

    if(!title){
        emptyFields.push('title')
    }

    if(!genre){
        emptyFields.push('genre')
    }

    if(!rating){
        emptyFields.push('rating')
    }

    if(!overView){
        emptyFields.push('overView')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    //Add a document to the database
    try{

        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path)
            imageUrl = result.secure_url
        }

        const videogame = await Videogame.create({
            title, 
            genre, 
            rating: Number(rating), 
            overView, 
            image: 
            imageUrl})
        res.status(200).json(videogame)
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

//Update a Videogame entry function
const updateVideogame = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such videogame"})
    }   
    
    const videogame = await Videogame.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!videogame){
        return res.status(400).json({error: "No such videogame"})
    }

    res.status(200).json(videogame)    
}
//Delete a Videogame entry function
const deletVideogame = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such videogame"})
    }

    const videogame = await Videogame.findOneAndDelete({_id: id})

    if(!videogame){
        return res.status(400).json({error: "No such videogame"})
    }

    res.status(200).json(videogame)
    
}

module.exports = {
    createVideogame,
    getAllVidegames,
    getVideogames,
    updateVideogame,
    deletVideogame
}