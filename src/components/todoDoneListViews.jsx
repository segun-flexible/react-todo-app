import React from "react";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TodoDoneListView = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.value}
      <button
        className="btn btn-default btn-xs pull-right  remove-item"
        onClick={() => deleteTodo(todo.id)}
      >
        <FontAwesomeIcon icon="trash" />
      </button>
    </li>
  );
};

export default TodoDoneListView;
