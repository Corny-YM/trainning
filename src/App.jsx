import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route path="/todo/:id" element={<TodoItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
