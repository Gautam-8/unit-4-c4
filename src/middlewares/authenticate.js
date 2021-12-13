const jwt = require("jsonwebtoken");

module.exports = async(req, res, next) => {
     
    const bearerToken = req?.headers?.authorization;

    if(!bearerToken || !bearerToken.startsWith("Bearer "))
    return res.status(400).json({
        message : "You are not a authorized userr"
    });

    const token = bearerToken.split(" ")[1];

    let user ;

    try{
        user = await jwt.verify(token , process.env.JWTKEY)
    }catch(e){
        return res.status(400).json({
            message : "You are not a authorized user"
        });

    }

    if(!user)
    return res.status(400).json({
        message : "You are not a authorized user"
    });

    req.user = user;

    next();


}