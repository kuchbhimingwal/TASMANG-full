const express = require('express')
const userRouter = express.Router()

userRouter.get("/", (req,res)=>{
  res.json({
    asda: "Adeq"
  })
})

module.exports = userRouter;