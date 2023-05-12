import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ name, id, setIsSelected, onAddTodo, onUpdateNameTodo }) => {
  console.log("hi");
  const [valueInput, setValueInput] = useState(name || "");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && valueInput.trim() != "") {
      if (!name) {
        onAddTodo(valueInput);
      } else {
        onUpdateNameTodo(id, valueInput);
        setIsSelected(false);
        navigate("/");
      }
      setValueInput("");
    }
  };

  return (
    <input
      value={valueInput}
      onKeyDown={handleKeyDown}
      onChange={(e) => setValueInput(e.target.value)}
      type="text"
      placeholder={!name ? "What needs to be done?" : ""}
    />
  );
};


function arePropsEquals(preProps, nextProps) {
  return preProps.name === nextProps.name && preProps.id === nextProps.id;
}

export default memo(Input, arePropsEquals);
