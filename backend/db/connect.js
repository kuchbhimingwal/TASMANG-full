const mongoose = require("mongoose");
const userSchema = require("./user");
const adminSchema = require("./admin")
const projectSchema = require("./projects")
mongoose.connect('mongodb+srv://admin:Shubham%4028@cluster0.yzcu80x.mongodb.net/TASMANG');


const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Projects = mongoose.model('Projects', projectSchema)

module.exports = {
  User,
  Admin,
  Projects
}



