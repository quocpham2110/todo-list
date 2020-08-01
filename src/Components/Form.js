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
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    value = name === "title" ? value.toUpperCase() : value;
    this.setState({ [name]: value });
  };
  handleAddTask = (e) => {
    e.preventDefault();
    this.props.handleAddTask(this.state);
    this.setState(this.initState);
  };
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
