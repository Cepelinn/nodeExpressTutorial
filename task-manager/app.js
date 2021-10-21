const express = require('express');
const app = express();
const tasks = require('./routers/tasks');

const port = 3000

app.use(express.static('./public'));

//routes
app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});