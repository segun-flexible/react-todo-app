import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const TodoListView = ({ todoProps, handleTickDone }) => {
  return (
    <>
      <hr />
      <ul id="sortable" className="list-unstyled ui-sortable">
        <li className="ui-state-default">
          <div className="checkbox">
            <label>
              <input
                className="checkboxdone"
                onChange={() => handleTickDone(todoProps.id)}
                type="checkbox"
              />
              {todoProps.value}
            </label>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TodoListView;
