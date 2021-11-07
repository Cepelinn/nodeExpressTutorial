const customAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getDashboard = async (req, res) => {
        const randomNum = Math.floor(Math.random() * 100);
        
        res.status(200).json({
            msg:`Hello ${req.user.username}`,
            secret:`Your secrect number is ${randomNum}`
        })
}

const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        throw new customAPIError('Please provide username and password', 500);
    }
    const id = new Date().getDate();
    const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn:'30d'});

    res.status(201).json({msg:'User was created',token});
}

module.exports = {
    getDashboard,
    login,
} 