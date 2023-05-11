/* eslint-disable no-case-declarations */
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [...state.todo, action.payload],
      };
    case "DELETE_TODO":
      const restTodo = [...state.todo];
      restTodo.splice(action.payload, 1);
      return {
        todo: restTodo,
      };
    case "UPDATE_NAME_TODO":
      const updateNameTodo = [...state.todo];
      updateNameTodo[action.payload.index].name = action.payload.name;
      return {
        todo: updateNameTodo,
      };
    case "UPDATE_DONE_TODO":
      const updateTodo = [...state.todo];
      updateTodo[action.payload.index].isDone = action.payload.isDone;
      return {
        todo: updateTodo,
      };
    default:
      return state;
  }
};

export default AppReducer;
