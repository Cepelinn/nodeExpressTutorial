require('dotenv').config();
//async errors


const express =  require('express');
const app = express();

//custom middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">products routre</a>');
})

//products route



app.use(notFoundMiddleware);
app.use(errorMiddleware);

//server

const port = process.env.PORT || 3000;

const start = async() => {
    try {
        //TODO connetc db
        app.listen(port, console.log(`Server is listen on port: ${port}`))
    } catch (error) {
      console.log(error);  
    }
}

start();

