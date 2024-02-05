const express = require('express');
const router = express.Router();
const mounthController = require('../controller/MounthController');

router.get('/month',mounthController.getMonth);
router.put('/month/:id',mounthController.updateMonth);

module.exports = router;
