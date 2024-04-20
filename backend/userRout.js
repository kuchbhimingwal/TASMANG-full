const express = require('express')
const userRouter = express.Router()
const {User} = require("./db/connect")
const z = require("zod");

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
  if(finduser) return res.status(411).json({msg: "user already exists"})

  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })
  if(!user) return res.status(411).json({msg: "issue with the DB"})
  
  res.status(200).json({msg :"user created"});
})

module.exports = userRouter;