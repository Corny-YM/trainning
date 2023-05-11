import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const arrTask = [
  {
    name: "Read work emails",
    isDone: true,
  },
  {
    name: "Call Amy",
    isDone: true,
  },
  {
    name: "Draft new website homepage",
    isDone: false,
  },
];

const INITIAL_STATE = {
  todo: arrTask,
};

const AppContext = createContext();
const storageTodo = JSON.parse(localStorage.getItem("todo"));

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    storageTodo ?? INITIAL_STATE
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
 }, [state]);

  return (
    <AppContext.Provider value={{ todo: state.todo, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
export default AppContextProvider;
