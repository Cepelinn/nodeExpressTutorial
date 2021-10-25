const Task = require('../models/Tasks')

const getAllTasks = async (req, res) => {
    try
    {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } 
    catch (error) 
    {
        res.status(500).json({msg: "can't get data from a database"});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: "can't get data from a database"});
    }
}

const getSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.find({_id: taskID});
        if(!task){
            return res.status(404).json({msg:"Task not found"});
        }
        return res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg: "can't get data from a database"});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;

        const task = await  Task.findOneAndUpdate({_id:taskID}, req.body, {
            new: true,
            runValidators: true,
        })

        return res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:"can't reach database server"});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findByIdAndDelete(taskID);
        if (!task) {
            return res.status(404).json({mag:"Task not found"});
        }
        return res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({msg: "can't get data from a database"});
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}