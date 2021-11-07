const express = require('express');
const router = express.Router();

const {getDashboard, login} = require('../controllers/main');

const authMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authMiddleware, getDashboard);
router.route('/login').post(login);

module.exports = router;