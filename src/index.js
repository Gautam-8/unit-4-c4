const express = require('express');

const app = express();

app.use(express.json());

const connect = require("./config/db");


app.listen( 1234 , async () => {
    await connect();
    console.log("listening on port 1234")
});