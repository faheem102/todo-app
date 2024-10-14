import { useState } from "react";
import TodoItem from "./Todoitem";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <Stack>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Button variant="contained" onClick={() => addTask(text)}>
        Add
      </Button>
    </Stack>
  );
}
export default TodoList;
