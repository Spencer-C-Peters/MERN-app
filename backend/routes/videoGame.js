const express = require('express')
const Videogame = require('../models/VideogameModel')
const {
    createVideogame,
    getAllVidegames,
    getVideogames,
    updateVideogame,
    deletVideogame
} = require('../controllers/VideogameController')

const router = express.Router()

//Route to get all workouts
router.get('/', getAllVidegames)

//GET a single workout
router.get('/:id', getVideogames)

//POST a new videgame entry
router.post('/', createVideogame)

//DELETE a videgame entryq
router.delete('/:id', deletVideogame)

//UPDATE a videgame entry
router.patch('/:id', updateVideogame)

module.exports = router