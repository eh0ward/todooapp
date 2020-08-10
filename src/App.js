import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TodoItemsComponent from "./TodoItemsComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      text: "",
      todos: [],
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  changeisClickedState = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: "",
    });
  };

  // doneListItem = () => () => {
  //   this.setState({
  //     todos: [...this.state.todos, this.state.text],
  //     text: "",
  //   });
  // };

  deleteListItem = (index) => () => {
    console.log(index);
    let todoList = [...this.state.todos];
    todoList.splice(index, 1);
    this.setState({
      todos: todoList,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        {/* <TodoItemsComponent todos={this.state.todos} /> */}
        <input value={this.state.text} onChange={this.onChange} />
        <br></br>
        <button onClick={this.changeisClickedState}>Add To List</button>
        <ul className="Delete">
          {this.state.todos.map((todo, index) => {
            return (
              <TodoItemsComponent
                key={index}
                // doneButton={this.doneListItem()}
                deleteButton={this.deleteListItem(index)}
                listValue={todo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
