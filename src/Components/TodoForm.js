import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
const { v4: uuidv4 } = require("uuid");

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // Reseting the form:
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        color="secondary"
        variant="outlined"
        size="small"
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button
        style={{ marginBottom: 2, marginLeft: 10 }}
        variant="contained"
        color="secondary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default TodoForm;
