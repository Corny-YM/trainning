import { useContext } from "react";
import "./App.css";
import Task from "./components/Task";
import Input from "./components/Input";
import { AppContext } from "./context/AppContext";

function App() {
  const { todo, dispatch } = useContext(AppContext);
  return (
    <>
      <Input dispatch={dispatch} />
      <div>
        {todo.map((task, index) => (
          <Task key={index} index={index} task={task} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
}

export default App;
