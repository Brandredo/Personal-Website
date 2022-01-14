// dependencies
const PORT = require('dotenv').config();
const express = require('express');
const client = require('./database/Connect');
const pgClient = require('./database/ConnectPG');
const



// use express
const app = express();

// to handle incoming POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// connect to databases
client.connect();
//pgClient.connect();


app.listen(process.env.PORT || 3001, function (error) {

    if (error) {
        console.log("Server couldn't connect.");
    }
    console.log(`Server connected on port ${process.env.PORT}`);
})