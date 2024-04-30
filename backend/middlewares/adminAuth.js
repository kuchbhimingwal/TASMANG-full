const {SECRETKEY} = require("../config")
const jwt = require('jsonwebtoken');

const adminAuth = (req,res,next)=>{
  const authorizationString = req.headers.authorization.split(" ");
  const token = authorizationString[1];
  if(authorizationString[0] != "Bearer") {
    return res.status(411).json({ msg: "invalit auth"})
  }
  try {
    var decoded = jwt.verify(token, SECRETKEY);
    req.userId = decoded.userId;
    
    next();
  } catch (error) {
    return res.status(411).json({ msg: "invalit auth"})
  }
}

module.exports = adminAuth;