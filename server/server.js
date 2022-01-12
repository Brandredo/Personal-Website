// dependencies
const PORT = require('dotenv').config();
const express = require('express');
const client = require('./database/Connect');
const pgClient = require('./database/ConnectPG');
// use express
const app = express();

// connect to databases
client.connect();
//pgClient.connect();


app.listen(process.env.PORT || 3001, function (error) {

    if (error) {
        console.log("Server couldn't connect.");
    }
    console.log(`Server connected on port ${process.env.PORT}`);
})