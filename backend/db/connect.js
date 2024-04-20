const mongoose = require("mongoose");
const userSchema = require("./user");
const adminSchema = require("./admin")
mongoose.connect('mongodb+srv://admin:Shubham%4028@cluster0.yzcu80x.mongodb.net/TASMANG');


const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
  User,
  Admin
}



