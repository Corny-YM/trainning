import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Task from "./Task";

const TodoItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { todo, dispatch } = useContext(AppContext);
  const takeTask = () => {
    const task = todo.filter((task) => task.id == id);
    return task[0];
  };

  const handleAddTodo = (valueInput) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: valueInput,
        isDone: false,
        id: Date.now(),
      },
    });
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
    navigate("/");
  };

  const handleUpdateNameTodo = (id, valueInput) => {
    dispatch({
      type: "UPDATE_NAME_TODO",
      payload: {
        id: id,
        name: valueInput,
      },
    });
  };

  return (
    <div>
      <Task
        task={takeTask()}
        onAddTodo={handleAddTodo}
        onUpdateNameTodo={handleUpdateNameTodo}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TodoItem;
