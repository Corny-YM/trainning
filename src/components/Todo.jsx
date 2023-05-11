import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Input from "./Input";
import Task from "./Task";

const Todo = () => {
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
};

export default Todo;
