const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');


router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

router.get('/', usersCtrl.getAllUsers);
router.get('/:id', usersCtrl.getOneUser);
router.delete('/:id', usersCtrl.deleteAccount);


module.exports = router;