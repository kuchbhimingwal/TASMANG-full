const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Projects',
    require: true
  },
  assigTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    require: true
  },
  taskName:{
    type: String,
    require: true
  },
  status: {
    type: Boolean,
    require: true,
    default: false
  },
  priority:{
    type: String,
  },
  discription:{
    type: String,
  },
  completionDate: {
    type: Date,
    require: true
  }
})

module.exports = taskSchema;