import { useState } from "react";

const Input = ({ name, index, setIsSelected, dispatch }) => {
  const [valueInput, setValueInput] = useState(name || "");

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && valueInput.trim() != "") {
      if (!name) {
        dispatch({
          type: "ADD_TODO",
          payload: {
            name: valueInput,
            isDone: false,
          },
        });
      } else {
        dispatch({
          type: "UPDATE_NAME_TODO",
          payload: {
            index: index,
            name: valueInput,
          },
        });
        setIsSelected(false);
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

export default Input;
