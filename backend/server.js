require('dotenv').config();

const express = require('express');

//Express app
const app = express();

//Logs request that are made
//Moves on to the next request only if it is used.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
});

//Listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port," , process.env.PORT);
});

