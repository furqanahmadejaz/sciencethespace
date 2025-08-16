const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
  user:{
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }

},{timestamps: true})

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body:{
    type: String,
    required: true
  },
  
  author:{
    type:String,
    required: true
  },
  user_id:{
    type: String,
    required: true
  },
  comments: {
    type:[commentSchema],
    default: []
  }

}, {timestamps: true});

module.exports = mongoose.model('Blog', blogSchema)