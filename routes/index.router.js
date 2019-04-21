const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlDailySell = require('../controllers/dailySell.controller');
const ctrlDailyBuy = require('../controllers/dailyBuy.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/dailySellProfile',ctrlDailySell.dailySellProfile);
router.get('/dailyBuyProfile',ctrlDailyBuy.dailyBuyProfile);
router.post('/testentry', ctrlDailySell.testentry);
router.post('/testentry_buy', ctrlDailyBuy.testentry_buy);
module.exports = router;