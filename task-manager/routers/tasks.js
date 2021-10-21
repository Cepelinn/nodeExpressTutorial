const experess = require('express');
const router = experess.Router();


router.get('/', (req, res) => {
    res.send('get all task');
});

router.post('/', (req, res) => {
    res.send('create new task');
});

router.get('/:id', (res, req) => {
    res.send('get single task');
});

router.patch('/:id', (req, res) => {
    res.send('update single task');
});

router.delete('/:id', (req, res) => {
    res.send('delete single task');
});

module.exports = router;