const express = require("express");
const userRouter = require("./routes/userRout")
const adminRouter = require("./routes/adminRout")
const app = express();
const cors = require('cors');
// const path  = require('path');


app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.listen(3001 , () => console.log('Listening to port 3001'));