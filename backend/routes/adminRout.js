const express = require('express')
const adminRouter = express.Router()
const {Admin, Projects} = require("../db/connect")
const z = require("zod")
const {SECRETKEY} = require("../config")
const adminAuth = require("../middlewares/adminAuth")
const jwt = require('jsonwebtoken');

const projectStructure = z.object({
  projectName: z.string(),
  completionDate: z.string(),
  discription: z.string()
})
adminRouter.get("/signin", async(req,res)=>{
  const find = await Admin.findOne({email: req.headers.email, password: req.headers.password})
  if(!find) return res.status(411).json({mssg : "wrong credentials"})
  
  const token  = jwt.sign({userId: find._id}, SECRETKEY)
  res.status(200).json({msg :"loggen in", token: token});
})

adminRouter.post("/project",adminAuth, async(req, res)=>{
  
  const { success } = projectStructure.safeParse(req.body);
  if(!success) return res.status(411).json({msg: "not valid inputs"})
  
  const projectCreated = await Projects.create({
    userId: req.userId,
    projectName: req.body.projectName,
    createdAt: Date.now(),
    discription: req.body.discription,
    completionDate: req.body.completionDate
  })
  if(!projectCreated) return res.status(411).json({msg: "issue with db"});

  res.status(200).json({msg: "project created"});
})
module.exports = adminRouter;