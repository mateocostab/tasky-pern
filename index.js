const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

//ROUTES//

//Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { todoDescription } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, completed) VALUES($1, 'false') RETURNING*",
      [todoDescription]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

//Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { todoDescription } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [todoDescription, id]
    );

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//Update completed
app.put("/todos/complete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET completed = $1 WHERE todo_id = $2",
      [completed, id]
    );

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
});
//Delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
