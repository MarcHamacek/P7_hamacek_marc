const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postsCtrl = require('../controllers/posts');


// Routes Posts
router.post('/', postsCtrl.createPost);
router.get('/', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePost);
router.put('/:id', postsCtrl.updatePost);
router.delete('/:id', postsCtrl.deletePost);


// Routes Comments
router.post('/:id', postsCtrl.commentPost);
router.get('/:id/comments', postsCtrl.getAllComments);
router.delete('/:id/comments/:id', postsCtrl.deleteComment);


module.exports = router;