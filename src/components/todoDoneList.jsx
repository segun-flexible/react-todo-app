import React, { useEffect } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

import TodoDoneListView from "./todoDoneListViews";
import { deleteDoneTodo } from "../actions/deleteDoneTodo";
import { trashAllDone } from "../actions/trashAllDone";
import { saveToStorage } from "../functions/saveToStorage";

const TodoDoneList = (props) => {
  const doneTodosCount = props.deletedTodos.length;
  useEffect(() => {
    saveToStorage("COMPLETED_TODOS", props.deletedTodos);
  }, [props.deletedTodos]);
  return (
    <div className="todolist">
      <h1>Completed Todos</h1>

      {doneTodosCount > 0 ? (
        <button
          className="btn btn-danger btn-sm mb-3"
          onClick={props.trashAllDone}
        >
          Trash All
        </button>
      ) : (
        ""
      )}

      {doneTodosCount > 0 ? (
        <ul id="done-items" className="list-unstyled">
          {props.deletedTodos.map((todo) => (
            <TodoDoneListView
              todo={todo}
              key={todo.id}
              deleteTodo={props.deleteDoneTodo}
            />
          ))}
        </ul>
      ) : (
        <p>All Completed Todos Appears Here!</p>
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { deleteDoneTodo, trashAllDone })(
  TodoDoneList
);
