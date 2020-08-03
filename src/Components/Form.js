import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.initState = {
      title: "",
      content: "",
    };
    this.state = this.initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.addToList = this.addToList.bind(this);
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    value = name === "title" ? value.toUpperCase() : value;
    this.setState({ [name]: value });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    const taskCheck = this.state;
    taskCheck.title = taskCheck.title.trim();
    taskCheck.content = taskCheck.content.trim();
    taskCheck.title === "" || taskCheck.content === ""
      ? alert("Please completing your task before adding")
      : this.addToList(taskCheck);
  };
  addToList(task) {
    this.props.addToList(task);
    this.setState(this.initState);
  }
  render() {
    return (
      <section className="form">
        <div className="container">
          <h3>PLEASE ADD YOUR TASK:</h3>
          <form className="form__inner" onSubmit={this.handleAddTask}>
            <label>
              <p>Your task:</p>
              <input
                onChange={this.handleChange}
                value={this.state.title}
                type="text"
                name="title"
                placeholder="Enter your title..."
              />
            </label>
            <label>
              <p>Task content:</p>
              <textarea
                onChange={this.handleChange}
                value={this.state.content}
                name="content"
                rows="5"
                placeholder="Enter your task content..."
              ></textarea>
            </label>
            <div className="form__btn">
              <button type="submit">ADD TASK</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
