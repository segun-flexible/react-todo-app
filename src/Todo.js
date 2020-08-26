import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components/fontawesome";
import TodoList from "./components/todoList";
import TodoFooter from "./components/todoFooter";
import TodoDoneList from "./components/todoDoneList";
import TodoAddNew from "./components/todoAddNew";

const Todo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="todolist not-done">
            <TodoAddNew />
            <TodoList />
            <TodoFooter />
          </div>
        </div>

        <div className="col-md-6">
          <TodoDoneList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
