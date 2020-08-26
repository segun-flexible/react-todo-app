import { DELETE_TODO } from "../types";

export function deleteTodo(id) {
  return function (dispatch, getState) {
    const todos = getState().todos.filter((todo) => todo.id !== id);
    const forDeleted = getState().todos.find((todo) => todo.id === id);

    dispatch({ type: DELETE_TODO, payload: id, forTodo: todos, forDeleted });
  };
}
