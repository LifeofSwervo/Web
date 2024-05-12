const express = require('express');
const app = express();
const mySQL = require("mySQL")

const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "todo_db",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
})

app.use(express.json());

// Gets all todos
app.get("/todos", (req, res) => {
    let sql = "SELECT * FROM todos";
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
})

// Adds todo
app.post("/todos", (req, res) => {
    let newTodo = { title: req.body.title };
    let sql = "INSERT INTO todos SET ?";
    db.query(sql, newTodo, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.listen(5000, () => {
    console.log('Server started on port 5000');
});