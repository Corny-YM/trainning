import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Task from "./Task";

const TodoItem = () => {
  const { id } = useParams();
  const { todo, dispatch } = useContext(AppContext);
  return (
    <div>
      <Task task={todo[id]} index={id} dispatch={dispatch} />
    </div>
  );
};

export default TodoItem;
