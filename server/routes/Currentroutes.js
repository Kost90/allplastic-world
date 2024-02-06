const express = require('express');
const router = express.Router();
const currentController = require('../controller/CurrentController');

router.get('/', currentController.getCurrent);
router.put('/:id', currentController.updateCurrent);

module.exports = router;