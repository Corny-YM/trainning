import { memo } from "react";
import { useParams } from "react-router-dom";

const Checkbox = ({ isDone, id, onUpdateDoneTodo }) => {
  console.log("re-render check-box");
  const { paramId } = useParams();

  return (
    <input
      checked={isDone}
      onChange={() => onUpdateDoneTodo(id, isDone, paramId)}
      type="checkbox"
    />
  );
};

function arePropsEquals(preProps, nextProps) {
  return preProps.isDone === nextProps.isDone && preProps.id === nextProps.id;
}

export default memo(Checkbox, arePropsEquals);
