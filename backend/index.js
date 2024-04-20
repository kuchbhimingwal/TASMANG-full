const express = require("express");
const userRouter = require("./userRout")
const adminRouter = require("./adminRout")
const app = express();


app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.listen(3000)