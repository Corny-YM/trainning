import { useState } from "react";
import Input from "./Input";

const Task = ({ task, index, dispatch }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleUpdateDoneTodo = () => {
    dispatch({
      type: "UPDATE_DONE_TODO",
      payload: {
        index: index,
        isDone: task.isDone ? false : true,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: index,
    });
  };

  return (
    <div className="display-flex padding-8">
      <input
        checked={task?.isDone}
        onChange={handleUpdateDoneTodo}
        type="checkbox"
      />
      {!isSelected && (
        <div onClick={() => setIsSelected(true)} className="margin-2-8">
          {task?.name}
        </div>
      )}
      {isSelected && (
        <Input
          name={task?.name}
          index={index}
          setIsSelected={setIsSelected}
          dispatch={dispatch}
        />
      )}
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Task;
