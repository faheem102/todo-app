import "./App.css";
import TodoList from "./components/Todolist";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h1" gutterBottom>
        Todo App
      </Typography>
      <TodoList />
    </div>
  );
}

export default App;
