const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

// Gets all todos
app.get("/todo", (req, res) => {
    res.json({ message: 'Hello World' });
})

// Adds todo
app.post("/todo", (req, res) => {
    res.json({ message: 'Post request works' });
})

app.listen(5000, () => {
    console.log('Server started on port 5000');
});