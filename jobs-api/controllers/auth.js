require('dotenv').config();
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const user = await User.create({...req.body});
    const token = user.createJWT();

    res
        .status(StatusCodes.CREATED)
        .json({user: {name:user.name}, token});
}

const login = (req, res) => {
    res.stauts(200).send('login route');
}

module.exports = {
    register,
    login,
}