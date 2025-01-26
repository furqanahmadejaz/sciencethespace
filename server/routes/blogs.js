const express = require('express')
const router = express.Router()
const { getBlog, getBlogs, updateBlog, deleteBlog, newBlog } = require('../controllers/blogsController') 

router.get('/', getBlogs)

router.get('/:_id', getBlog)

router.post('/', newBlog)

router.delete('/:_id', deleteBlog)

router.patch('/:_id', updateBlog)


module.exports = router
