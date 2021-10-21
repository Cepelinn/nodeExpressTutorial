const express = require('express');
const app = express();
const tasks = require('./routers/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = 3000

//middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
};

start();