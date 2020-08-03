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
    this.addToList = this.addToList.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addToList = (value) => {
    this.setState({ task: [...this.state.task, value] });
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
        <Form addToList={this.addToList} />
      </div>
    );
  }
}
