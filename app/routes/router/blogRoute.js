const express = require('express');
const router = express();
const { validator } = require('../../helper/validator')
const { idValidation } = require('../../validation/idValidation');
const { addBlog, editBlog, deleteBlog, viewBlog, listOfBlog } = require('../../controller/blogController');
const { addBlogValidation, editBlogValidation } = require('../../validation/blogValidation');
const { authorization } = require('../../helper/auth');

router.post('/api/blog/addBlog', authorization(['Admin', 'User']), validator.body(addBlogValidation), addBlog);
router.put('/api/blog/editBlog/:id', authorization(['Admin', 'User']), validator.params(idValidation), validator.body(editBlogValidation), editBlog);
router.get('/api/blog/viewBlog/:id', authorization(['Admin', 'User']), validator.params(idValidation), viewBlog);
router.get('/api/blog/listOfBlog', authorization(['Admin', 'User']), listOfBlog);
router.delete('/api/blog/deleteBlog/:id', authorization(['Admin', 'User']), validator.params(idValidation), deleteBlog);

module.exports = router;