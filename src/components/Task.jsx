import { memo, useState } from "react";
import Input from "./Input";

import Checkbox from "./Checkbox";
import { useNavigate, useParams } from "react-router-dom";

const Task = ({
  task,
  onDelete,
  onAddTodo,
  onUpdateNameTodo,
  onUpdateDoneTodo,
}) => {
  console.log("re-render TASK");
  const [isSelected, setIsSelected] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {paramId} = useParams();

  const handleClickTask = (e) => {
    e.stopPropagation();
    if (id !== task.id) navigate(`/todo/${task.id}`);
    setIsSelected(true);
  };

  return (
    <div className="display-flex padding-8">
      <Checkbox
        isDone={task.isDone}
        id={task.id}
        onUpdateDoneTodo={onUpdateDoneTodo}
      />
      {!isSelected && (
        <div onClick={handleClickTask} className="margin-2-8">
          {task.name}
        </div>
      )}
      {isSelected && (
        <Input
          name={task?.name}
          id={task?.id}
          setIsSelected={setIsSelected}
          onAddTodo={onAddTodo}
          onUpdateNameTodo={onUpdateNameTodo}
        />
      )}
      <button onClick={(e) => onDelete(e, task.id, paramId)}>X</button>
    </div>
  );
};

function arePropsEquals(preProps, nextProps) {
  return preProps.task === nextProps.task;
}

export default memo(Task, arePropsEquals);
