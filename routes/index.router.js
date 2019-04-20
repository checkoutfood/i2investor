const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlDailySell = require('../controllers/dailySell.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/dailySellProfile',ctrlDailySell.dailySellProfile);
router.post('/testentry', ctrlDailySell.testentry);
module.exports = router;