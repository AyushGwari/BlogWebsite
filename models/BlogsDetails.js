const mongoose = require('mongoose');
const Users = require('./Users')
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required : true,
    max: 50
  },
  author: {
    type: String
  },
  body: {
    type: String,
    required: true
    },
  comments: {
    type: String
  },
//   date: { type: Date},
  
});

module.exports = mongoose.model("BlogDetails",blogSchema);

