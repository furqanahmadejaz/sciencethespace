const express = require('express')
const { getUserBlogs } = require('../controllers/blogsController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)
router.get('/userblogs', getUserBlogs)

module.exports = router