const Blog = require('../models/blogModel')
const mongoose = require('mongoose')


const getBlogs = async ( req, res) =>{
    try{
        const response = await Blog.find({}).sort({createdAt: -1})
        res.status(200).json(response)
    }catch(error){
        console.log(error)
    }
}


const getBlog = async (req, res) => {
  const { _id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).json({error: "Not a valid object id"})
  }

  const blog = await Blog.findById({_id})

  if(!blog){
    return res.status(404).json({error: "No document with this id exists"})
  }
  res.status(200).json(blog)

};

const getUserBlogs = async (req, res) => {
  const user_id = req.user._id;
  try {
    const response = await Blog.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};


const newBlog = async (req, res) => {

    const {title, body, author } = req.body
    const user_id = req.user._id
    try{
        const response = await Blog.create({title, body, author, user_id});
        res.status(200).json(response)
    } catch(error){
        res.status(400).json({"mssg" : "unable to create a blog"})
    }
};


const deleteBlog = async (req, res) => {
  const { _id } = req.params;
  const user_id = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "Not a valid object id" });
  }

  const blog = await Blog.findOne({_id});

  if (!blog) {
    return res.status(404).json({ error: "No document with this id exists" });
  }

  if(blog.user_id != user_id){
    return res.status(401).json({error: "You are not authorized to delete this document"})
  } 

  await Blog.findOneAndDelete({_id})

  
  res.status(200).json(blog);
};

const updateBlog = async (req, res) => {
   const {_id }  = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "Not a valid object id" });
    }

    const updateKeys = req.body

    const blog = await Blog.findByIdAndUpdate({_id}, updateKeys)

    if(!blog){
        return res.status(404).json({error: "Cannot update the document"})
    }

    res.status(200).json(blog);
};




module.exports = {getBlog, getBlogs, newBlog, deleteBlog, updateBlog, getUserBlogs}
