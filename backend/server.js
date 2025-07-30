require('dotenv').config();

const express = require('express');
const videoGameRoutes = require('./routes/videoGame');
const mongoose = require('mongoose')

//Express app
const app = express();

//Middleware
app.use(express.json())

//Logs request that are made
//Moves on to the next request only if it is used.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//Calls all the routes from the file in the routes folder and runs them when called.
app.use('/api/videogames', videoGameRoutes)

//Connect to Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to Database and listening on port," , process.env.PORT);
            });
    })
    .catch((error) => {
        console.log(error)
    })


