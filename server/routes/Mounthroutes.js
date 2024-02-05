const express = require('express');
const router = express.Router();
const mounthController = require('../controller/MounthController');

router.get('/',mounthController.getMonth);
router.put('/:id',mounthController.updateMonth);

module.exports = router;
