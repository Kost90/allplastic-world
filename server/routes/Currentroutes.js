const express = require('express');
const router = express.Router();
const currentController = require('../controller/CurrentController');

router.get('/current', currentController.getCurrent);
// router.put("/", userController.addNewUser);

module.exports = router;