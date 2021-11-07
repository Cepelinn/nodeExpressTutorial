const customAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getDashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new customAPIError('No token provided', 401);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const randomNum = Math.floor(Math.random() * 100);

        res.status(200).json({msg:`Hello ${decoded.username}`,secret:`Your secrect number is ${randomNum}`})
    } catch (error) {
        throw new customAPIError('You are not authorized to get data', 401);
    }
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