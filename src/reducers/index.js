import {
  ADD_TODO,
  DELETE_TODO,
  EMPTY_ALL,
  DELETE_DONE_TODO,
  TRASH_ALL,
} from "../types";
import { combineReducers } from "redux";
import { getFromStorage } from "../functions/getFromStorage";

export function todoReducer(
  state = getFromStorage("UNCOMPLETED_TODOS") || [],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return action.forTodo;
    case EMPTY_ALL:
      return [];
    default:
      return state;
  }
}

export function todoDeleteReducer(
  state = getFromStorage("COMPLETED_TODOS") || [],
  action
) {
  switch (action.type) {
    case DELETE_DONE_TODO:
      return action.newDeletedTodos;

    case DELETE_TODO:
      return [...state, action.forDeleted];
    case EMPTY_ALL:
      return [...state, ...action.emptyAllGet];
    case TRASH_ALL:
      return [];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos: todoReducer,
  deletedTodos: todoDeleteReducer,
});

export default rootReducer;
