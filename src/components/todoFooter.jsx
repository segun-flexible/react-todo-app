import React from "react";

const TodoFooter = ({ count }) => {
  return (
    <div className="todo-footer">
      <strong>
        <span className="count-todos">{count > 0 ? count : "No"}</span>
      </strong>
      Items Left
    </div>
  );
};

export default TodoFooter;
