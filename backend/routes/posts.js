const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// Routes Posts
router.post('/', auth, postsCtrl.createPost);
router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.put('/:id', auth, postsCtrl.updatePost);
router.delete('/:id', auth, postsCtrl.deletePost);


// Routes Comments

router.post('/:id', auth, postsCtrl.commentPost);
router.get('/:id/comments', auth, postsCtrl.getAllComments);
router.delete('/:id/comments/:id', auth, postsCtrl.deleteComment);


module.exports = router;