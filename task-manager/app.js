const express = require('express');
const app = express();

const port = 3000

app.use(express.static('./public'));

//routes
app.get('/api/v1/tasks', (req, res) => {
    res.send("Get All Tasks");
})

app.post('/api/v1/tasks', (req, res) => {
    res.send("Create Task");
})

app.get('/api/v1/tasks/:id', (req, res) => {
    res.send("Get Single Task");
})

app.patch('/api/v1/tasks/:id', (req, res) => {
    res.send("Update Task");
})

app.delete('/api/v1/tasks/:id', (req, res) => {
    res.send("Delete Task");
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});