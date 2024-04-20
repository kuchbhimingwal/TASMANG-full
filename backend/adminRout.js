const express = require('express')
const adminRouter = express.Router()
const {Admin} = require("./db/connect")
const {SECRETKEY} = require("./config")
const jwt = require('jsonwebtoken');

adminRouter.get("/signin", async(req,res)=>{
  const find = await Admin.findOne({email: req.headers.email, password: req.headers.password})
  if(!find) return res.status(411).json({mssg : "wrong credentials"})
  
  const token  = jwt.sign({userId: find._id}, SECRETKEY)
  res.status(200).json({msg :"loggen in", token: token});
})

module.exports = adminRouter;