import React, { useState, useRef, useEffect } from "react";
import "./fontawesome";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmptyAll from "./EmptyAll";
import { addTodo } from "../actions/addTodo";
import { saveToStorage } from "../functions/saveToStorage";

const TodoAddNew = (props) => {
  const [inputTodo, setInputTodo] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    saveToStorage("UNCOMPLETED_TODOS", props.todos);
  }, [props.todos]);
  return (
    <>
      <h1>Todos</h1>

      <div className="split">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.addTodo(inputTodo);
            inputRef.current.value = "";
            inputRef.current.focus();
          }}
        >
          <input
            ref={inputRef}
            onChange={(e) => setInputTodo(e.target.value)}
            type="text"
            className="form-control add-todo"
            placeholder="What Are You Doing Today?"
          />
        </form>
        <button
          id="addNew"
          className="btn btn-success"
          onClick={() => {
            props.addTodo(inputTodo);
            inputRef.current.value = "";
            inputRef.current.focus();
          }}
        >
          <FontAwesomeIcon icon="check" />
        </button>
      </div>

      <EmptyAll />
    </>
  );
};
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { addTodo })(TodoAddNew);
