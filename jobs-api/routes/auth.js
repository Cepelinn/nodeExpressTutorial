const expresss = require('express');
const router = expresss.Router();

const { register, login } = require('../controllers/auth');

router.post('/login', login);
router.post('/register', register);

module.exports = router;