const express = require('express')
const userRouter = express.Router()
const {User, Admin} = require("./db/connect")
const {SECRETKEY} = require("./config")
const z = require("zod");
const jwt = require('jsonwebtoken');

const userSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string(),
})

userRouter.post("/signup", async(req,res)=>{
  const { success } = userSchema.safeParse(req.body)
  if(!success) return res.status(411).json({msg: "not a valid input"})

  const finduser = await User.findOne({email: req.body.email})
  const findadmin = await Admin.findOne({email: req.body.email})
  if(finduser || findadmin) return res.status(411).json({msg: "user already exists"})

  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })
  if(!user) return res.status(411).json({msg: "issue with the DB"})
  const token  = jwt.sign({userId: user._id}, SECRETKEY)
  res.status(200).json({msg :"user created", token: token});
})

userRouter.get("/signin", async(req,res)=>{
  const find = await User.findOne({email: req.headers.email, password: req.headers.password})
  if(!find) return res.status(411).json({mssg : "wrong credentials"})
 
  const token  = jwt.sign({userId: find._id}, SECRETKEY)
  res.status(200).json({msg :"loggen in", token: token});
})

module.exports = userRouter;