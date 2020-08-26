import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import TodoListView from "./todoListView";
import { deleteTodo } from "../actions/deleteTodo";

const TodoList = (props) => {
  return (
    <>
      <ul id="sortable" className="list-unstyled ui-sortable">
        {props.todos.map((todo) => (
          <TodoListView
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { deleteTodo })(TodoList);
