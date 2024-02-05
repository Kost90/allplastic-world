const express = require('express');
const router = express.Router();
const alltimeController = require('../controller/AlltimeController');

router.get('/',alltimeController.getAlltimes);
router.put('/:id',alltimeController.updateAlltime);

module.exports = router;
