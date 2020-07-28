import React, { Component } from "react";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class TodoAddNew extends Component {
  render() {
    const { reference, handleSubmit, handleDeleteAllProps, count } = this.props;
    return (
      <>
        <h1>Todos</h1>

        <div className="split">
          <form onSubmit={handleSubmit}>
            <input
              ref={reference}
              type="text"
              className="form-control add-todo"
              placeholder="What Are You Doing Today?"
            />
          </form>
          <button
            id="addNew"
            onClick={handleSubmit}
            className="btn btn-success"
          >
            <FontAwesomeIcon icon="check" />
          </button>
        </div>

        {count > 0 ? (
          <button
            className="btn btn-danger btn-sm mt-3"
            onClick={handleDeleteAllProps}
          >
            Empty All
          </button>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default TodoAddNew;
