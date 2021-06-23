const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const usersCtrl = require('../controllers/users');


router.post('/signup', usersCtrl.signup); //TEST OK // OK F+B VOIR SI PLUGIN EMAIL ENCODER
router.post('/login', usersCtrl.login); //TEST OK // OK F+B
router.get('/', usersCtrl.getAllUsers); // TEST OK // OK F+B
router.get('/:id', usersCtrl.getOneUser); // TEST OK
router.put('/:id', auth, usersCtrl.modifyUser); // TEST OK
router.delete('/:id', usersCtrl.deleteAccount); // OK VOIR SI DELETE POST


module.exports = router;