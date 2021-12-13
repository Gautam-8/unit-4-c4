const express = require('express');

const app = express();

app.use(express.json());

const connect = require("./config/db");

const moviecontroller = require("./controllers/movie.controller");
app.use("/movies" , moviecontroller);

const theatrecontroller = require("./controllers/theatre.controller");
app.use("/theatres" , theatrecontroller);

const screencontroller = require("./controllers/screen.controller");
app.use("/screens" , screencontroller);

const showtimecontroller = require("./controllers/showtime.controller");
app.use("/showtimes" , showtimecontroller);

const seatcontroller = require("./controllers/seat.controller");
app.use("/seats" , seatcontroller);

const { register , login } = require("./controllers/user.controller");
app.post("/register" , register);
app.post("/login" , login);


app.listen( 1234 , async () => {
    await connect();
    console.log("listening on port 1234")
});