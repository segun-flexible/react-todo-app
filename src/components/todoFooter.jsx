import React from "react";
import { connect } from "react-redux";

const TodoFooter = (props) => {
  const todoCount = props.todos.length;

  return (
    <div className="todo-footer">
      <strong style={{ paddingRight: "5px" }}>
        {todoCount > 0 ? todoCount : "No "}{" "}
      </strong>
      Items Left
    </div>
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, null)(TodoFooter);
