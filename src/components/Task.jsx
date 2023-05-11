import { useState } from "react";
import Input from "./Input";
import { useNavigate, useParams } from "react-router-dom";
import Checkbox from "./Checkbox";

const Task = ({ task, index, dispatch }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch({
      type: "DELETE_TODO",
      payload: index,
    });
    navigate("/");
  };

  const handleClickTask = () => {
    if (id !== index) navigate(`/todo/${index}`);
  };

  return (
    <div onClick={handleClickTask} className="display-flex padding-8">
      <Checkbox isDone={task.isDone} index={index} />
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
