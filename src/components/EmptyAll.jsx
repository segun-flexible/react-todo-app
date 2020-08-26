import React, { useEffect } from "react";
import { connect } from "react-redux";
import { emptyAllTodos } from "../actions/emptyAll";
import { saveToStorage } from "../functions/saveToStorage";

const EmptyAll = (props) => {
  const todoCount = props.todos.length;
  useEffect(() => {
    saveToStorage("UNCOMPLETED_TODOS", props.todos);
  }, [props.todos]);
  return todoCount > 0 ? (
    <>
      <hr />
      <button
        className="btn btn-danger btn-sm mt-3 mb-3"
        onClick={props.emptyAllTodos}
      >
        Empty All
      </button>
    </>
  ) : (
    ""
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { emptyAllTodos })(EmptyAll);
