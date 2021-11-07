const jwt = require('jsonwebtoken');
const customAPIError = require('../errors/custom-error');

const authenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new customAPIError('Token not provided', 401);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
        next();
    } catch (error) {
        throw new customAPIError('Not authorized to acces this route', 401);
    }
}

module.exports = authenticationMiddleware;