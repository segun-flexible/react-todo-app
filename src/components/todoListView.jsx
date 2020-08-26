import React from "react";

const TodoListView = ({ todo, deleteTodo }) => {
  return (
    <li className="ui-state-default">
      <div className="checkbox">
        <label>
          <input
            className="checkboxdone"
            type="checkbox"
            onChange={() => deleteTodo(todo.id)}
          />
          {todo.value}
        </label>
      </div>
    </li>
  );
};

export default TodoListView;
