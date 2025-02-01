const express = require('express')
const router = express.Router()
const { getBlog, getBlogs, updateBlog, deleteBlog, newBlog, getUserBlogs } = require('../controllers/blogsController') 

const requireAuth = require('../middleware/requireAuth')

router.get('/', getBlogs)

router.get('/:_id', getBlog)

router.use(requireAuth)

router.post('/', newBlog)

router.delete('/:_id', deleteBlog)

router.patch('/:_id', updateBlog)


module.exports = router
