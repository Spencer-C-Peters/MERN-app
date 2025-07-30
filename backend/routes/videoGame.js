const express = require('express')
const Videogame = require('../models/VideogameModel')

const router = express.Router()

//Route to get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workouts'})
})

//POST a new videgame entry
router.post('/', async (req,res) => {
    const {title, genre, rating, overView} = req.body

    try{
        const videogame = await Videogame.create({title, genre, rating, overView})
        res.status(200).json(videogame)
    }
    catch (error){
        res.status(400).json({error: error.mssg})
    }
})

//DELETE a videgame entryq
router.delete('/:id', (reg,res) => {
    res.json({mssg: 'DELETE a videogame entry'})
})

//UPDATE a videgame entry
router.patch('/:id', (reg,res) => {
    res.json({mssg: 'UPDATE a videogame entry'})
})

module.exports = router