const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    require: true
  },
  projectName:{
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  completionDate: {
    type: Date,
    require: true
  }
})

module.exports = projectSchema;