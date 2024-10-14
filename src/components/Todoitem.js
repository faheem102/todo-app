import React from "react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      <Stack direction="row" spacing={2} className="todo-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}>X</button>
      </Stack>
    </Box>
  );
}
export default TodoItem;
