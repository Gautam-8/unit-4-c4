const User = require("../models/user.model");

const jwt  = require("jsonwebtoken");

require('dotenv').config();

const newToken = (user) => {
    return jwt.sign({ user : user } , process.env.JWTKEY)
}


const register = async (req, res) => {

     try{
         let user = await User.findOne({email:req.body.email}).lean().exec();

    if(user) return res.status(400).json({message : "Please provide different email address"});

    user = await User.create(req.body);

    const token = newToken(user);

    return res.send({ user , token})

     }catch(e){
         return res.status(500).send(e.message)
     }

}

const login = async (req, res) => {

    try{
        let user = await User.findOne({email:req.body.email}).lean().exec();

   if(!user) return res.status(400).json({message : "Please provide correct email and password"});

 

   const token = newToken(user);

   return res.send({ user , token})

    }catch(e){
        return res.status(500).send(e.message)
    }

}

module.exports = { register , login};