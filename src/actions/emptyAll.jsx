import { EMPTY_ALL } from "../types";

export function emptyAllTodos() {
  return function (dispatch, getState) {
    const emptyAllGet = getState().todos;

    dispatch({ type: EMPTY_ALL, emptyAllGet });
  };
}
