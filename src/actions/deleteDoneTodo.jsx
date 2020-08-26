import { DELETE_DONE_TODO } from "../types";
export function deleteDoneTodo(id) {
  return function (dispatch, getState) {
    const newDeletedTodos = getState().deletedTodos.filter(
      (todo) => todo.id !== id
    );

    dispatch({ type: DELETE_DONE_TODO, id, newDeletedTodos });
  };
}
