require('dotenv').config();

const express = require('express');
const videoGameRoutes = require('./routes/videoGame');

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

//Listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port," , process.env.PORT);
});

