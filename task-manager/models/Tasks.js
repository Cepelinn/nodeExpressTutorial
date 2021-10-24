const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: [20, 'name can not be more than 20 character'],
        required: [true, 'task must provide name'],
        minlength: [2, 'minumue task name must be 2 character'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Task', TaskSchema);