/* eslint-disable no-case-declarations */
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [...state.todo, action.payload],
      };
    case "DELETE_TODO":
      return {
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_NAME_TODO":
      return {
        todo: state.todo.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              name: action.payload.name,
            };
          }
          return task
        }),
      };
    case "UPDATE_DONE_TODO":
      return {
        todo: state.todo.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              isDone: action.payload.isDone,
            };
          }
          return task
        }),
      };
    default:
      return state;
  }
};

export default AppReducer;
