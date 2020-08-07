const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/friends', userController.getFriends);
router.post('/add-friend', userController.addFriend);
router.delete('/remove-friend', userController.removeFriend);

module.exports = router;
