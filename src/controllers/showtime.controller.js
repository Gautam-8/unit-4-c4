const express = require("express");

const router = express.Router();

const Showtime = require("../models/showtime.model");

const Movie = require("../models/movie.model");

const Theatre = require("../models/theatre.model")

router.post("/" , async (req, res ) => {

    const showtime = await Showtime.create(req.body);
    return res.send({showtime});
});


router.get("/:moviename" ,async (req, res) => {

    const movie = await Movie.findOne({movie_name:req.params.moviename}).lean().exec();
    const shows = await Showtime.find({movie:movie._id}).populate("movie").populate("screen").lean().exec();

    return res.send({shows_availbale : shows})


});

router.get("/location/:place" ,async (req, res) => {

    const theatre = await Theatre.findOne({location:req.params.place}).lean().exec();
    const shows = await Showtime.find({theatre:theatre._id}).limit(1).populate("movie").populate({ path :"screen" , populate :{path:"theatre"}}).lean().exec();

    return res.send({shows_availbale : shows})


});


module.exports = router;