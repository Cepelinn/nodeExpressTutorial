const experess = require('express');
const router = experess.Router();

const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasksControllers');


router.get('/', getAllTasks);

router.post('/', createTask);

router.get('/:id', getSingleTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;