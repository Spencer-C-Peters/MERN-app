const express = require('express')
const Videogame = require('../models/VideogameModel')
const {
    createVideogame
} = require('../controllers/VideogameController')

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
router.post('/', createVideogame)

//DELETE a videgame entryq
router.delete('/:id', (reg,res) => {
    res.json({mssg: 'DELETE a videogame entry'})
})

//UPDATE a videgame entry
router.patch('/:id', (reg,res) => {
    res.json({mssg: 'UPDATE a videogame entry'})
})

module.exports = router