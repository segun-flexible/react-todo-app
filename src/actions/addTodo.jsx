import { ADD_TODO } from "../types";
import idGenerator from "../functions/generateId";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: { id: idGenerator(), value: todo },
  };
}
