const express = require('express');
const router = express.Router();

const {getDashboard, login} = require('../controllers/main')

router.route('/dashboard').get(getDashboard);
router.route('/login').post(login);

module.exports = router;