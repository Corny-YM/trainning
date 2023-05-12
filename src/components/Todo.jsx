import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import Input from "./Input";
import Task from "./Task";

const Todo = () => {
  const { todo, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleDelete = (e, id, paramId) => {
    e.stopPropagation();
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
    if(paramId) navigate("/");
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

  const handleUpdateNameTodo = (id, valueInput) => {
    dispatch({
      type: "UPDATE_NAME_TODO",
      payload: {
        id: id,
        name: valueInput,
      },
    });
  };

  const handleUpdateDoneTodo = (id, isDone, paramId) => {
    dispatch({
      type: "UPDATE_DONE_TODO",
      payload: {
        id: id,
        isDone: isDone ? false : true,
      },
    });
    if(paramId) navigate("/");
  };

  return (
    <>
      <Input
        onAddTodo={handleAddTodo}
        onUpdateNameTodo={handleUpdateNameTodo}
      />
      <div>
        {todo.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onAddTodo={handleAddTodo}
            onUpdateNameTodo={handleUpdateNameTodo}
            onUpdateDoneTodo={handleUpdateDoneTodo}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
