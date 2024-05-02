const express = require("express");
const userRouter = require("./routes/userRout")
const adminRouter = require("./routes/adminRout")
const app = express();
const cors = require('cors');
const path  = require('path');

const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../frontend/taskmng/dist");

app.use(express.static(buildPath))

app.get("/", function(req, res){

    res.sendFile(
        path.join(__dirname, "../frontend/taskmng/dist/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})


app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.get(/^\/(login|signup|project|tasks|mytasks|profile|profileedit|adminlogin|admindashboard|addtask)$/, (req, res) => {
  // Redirect to a different route
  res.redirect('/');
});
app.listen(3001 , () => console.log('Listening to port 3001'));