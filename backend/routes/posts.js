const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postsCtrl = require('../controllers/posts');


// Routes Posts
router.post('/', auth, multer, postsCtrl.createPost); // TEST OK // OK
router.get('/', postsCtrl.getAllPosts); // TEST OK // OK MANQUE IMAGE
router.get('/:id', auth, postsCtrl.getOnePost); // TEST OK
router.put('/:id', auth, postsCtrl.updatePost); // TEST OK
router.delete('/:id', auth, postsCtrl.deletePost); // TEST OK


// Routes Comments
router.post('/:id', auth, postsCtrl.commentPost);
router.get('/:id/comments', postsCtrl.getAllComments);
router.delete('/:id/comments/:id', postsCtrl.deleteComment);


module.exports = router;