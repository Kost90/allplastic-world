const express = require('express');
const router = express.Router();
const alltimeController = require('../controller/AlltimeController');

router.get('/alltime',alltimeController.getAlltimes);
router.put('/alltime/:id',alltimeController.updateAlltime);

module.exports = router;
