import { memo, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Checkbox = ({ isDone, index }) => {
  console.log("re-render");
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handleUpdateDoneTodo = () => {
    dispatch({
      type: "UPDATE_DONE_TODO",
      payload: {
        index: index,
        isDone: isDone ? false : true,
      },
    });
    navigate("/");
  };
  return (
    <input checked={isDone} onChange={handleUpdateDoneTodo} type="checkbox" />
  );
};

export default memo(Checkbox);
