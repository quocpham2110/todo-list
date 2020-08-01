import React, { Component } from "react";
import "./stylesheet/App.css";
import Header from "./Components/Header.js";
import List from "./Components/List.js";
import Form from "./Components/Form.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleAddTask = (value) => {
    value.title.trim() !== "" && value.content.trim() !== ""
      ? this.setState({ task: [...this.state.task, value] })
      : alert("Please fill your TASK before add");
  };
  deleteTask = (index) => {
    const { task } = this.state;
    this.setState({ task: task.filter((el, i) => i !== index) });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <List task={this.state.task} deleteTask={this.deleteTask} />
        <Form handleAddTask={this.handleAddTask} />
      </div>
    );
  }
}
