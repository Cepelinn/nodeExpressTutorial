const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json( err.name +": "+ err.message)
}

module.exports = errorHandlerMiddleware;