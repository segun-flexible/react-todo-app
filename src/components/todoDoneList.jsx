import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoDoneList = ({
  todos,
  handleRemoveDone,
  handleRemoveAllDoneProps,
  count,
}) => {
  return (
    <div className="todolist">
      <h1>Completed Todos</h1>
      {count > 0 ? (
        <button
          className="btn btn-danger btn-sm mb-3"
          onClick={handleRemoveAllDoneProps}
        >
          Trash All
        </button>
      ) : (
        <p>All Completed Todos Appears Here!</p>
      )}
      <ul id="done-items" className="list-unstyled">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.value}
            <button
              onClick={() => handleRemoveDone(todo.id)}
              id={todo.id}
              className="btn btn-default btn-xs pull-right  remove-item"
            >
              <FontAwesomeIcon
                icon="trash"
                onClick={() => handleRemoveDone(todo.id)}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoDoneList;
