import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./components/fontawesome";
import TodoListView from "./components/todoListView";
import TodoFooter from "./components/todoFooter";
import TodoDoneList from "./components/todoDoneList";
import TodoAddNew from "./components/todoAddNew";

class Todo extends Component {
textfield = React.createRef();

state = {
todoArr: JSON.parse(localStorage.getItem("TodoList")) || [],
todoDone: JSON.parse(localStorage.getItem("TodoDone")) || [],
};

//Add New Todo
handleAddNew = (event) => {
let { todoArr } = this.state;
event.preventDefault();
let newTodo = {
id: this.idGenerator(),
value: this.textfield.current.value,
};

    let cloneState = [...todoArr, newTodo];
    this.setState({ todoArr: cloneState });
    this.textfield.current.autofocus = true;

};

//Tick Done Todo
handleTodoDone = (id) => {
const { todoArr, todoDone } = this.state;
const filterAllTodo = todoArr.filter((todo) => todo.id !== id);
const getDoneTodo = todoArr.find((todo) => todo.id === id);
const filterAllDone = [...todoDone, getDoneTodo];
//Setting The States
this.setState({ todoArr: filterAllTodo, todoDone: filterAllDone });
};
//Delete Button Event
handleRemoveDone = (id) => {
let { todoDone } = this.state;
const cloneStateOfDone = [...todoDone].filter((done) => done.id !== id);
this.setState({ todoDone: cloneStateOfDone });
};

//Handle Empty All For TodoList
handDeleteAll = () => {
let { todoArr, todoDone } = this.state;
const cloneStateOfArr = [...todoArr, ...todoDone];
this.setState({ todoArr: [], todoDone: cloneStateOfArr });
};
//Handle Empty All For Todo Done
handleRemoveAllDone = () => {
this.setState({ todoDone: [] });
};

//Some Method After The Page Render
componentDidUpdate() {
let { todoArr, todoDone } = this.state;
this.textfield.current.value = "";
localStorage.setItem("TodoList", JSON.stringify(todoArr));
localStorage.setItem("TodoDone", JSON.stringify(todoDone));
}

render() {
//Desctructing State Variables
let { todoArr, todoDone } = this.state;

    return (
      <>
        <div className="container">
          <div className="row">
            {/* TodoList */}
            <div className="col-md-6">
              <div className="todolist not-done">
                <TodoAddNew
                  reference={this.textfield}
                  count={todoArr.length}
                  handleSubmit={this.handleAddNew}
                  handleDeleteAllProps={this.handDeleteAll}
                />
                {/* Creating List Based On The State */}

                {todoArr.map((todo) => (
                  <TodoListView
                    key={todo.id}
                    todoProps={todo}
                    handleTickDone={this.handleTodoDone}
                  />
                ))}
                <TodoFooter count={todoArr.length} />
              </div>
            </div>

            <div className="col-md-6">
              <TodoDoneList
                todos={todoDone}
                count={todoDone.length}
                handleRemoveAllDoneProps={this.handleRemoveAllDone}
                handleRemoveDone={this.handleRemoveDone}
              />
            </div>
          </div>
        </div>
      </>
    );

}
}

export default Todo;
