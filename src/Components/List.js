import React from "react";

const Items = (props) => {
  return (
    <li className={"list__items"}>
      <div>
        <h4>{props.task.title}</h4>
        <p>{props.task.content}</p>
      </div>
      <div>
        <button onClick={() => props.deleteTask(props.target)}>✕</button>
      </div>
    </li>
  );
};

const List = (props) => {
  const data = props.task;
  const items =
    data.length === 0 ? (
      <p>There's no task! Please add more.</p>
    ) : (
      data.map((element, index) => (
        <Items
          key={index}
          task={element}
          deleteTask={props.deleteTask}
          target={index}
        />
      ))
    );
  return (
    <section className="list">
      <div className="container">
        <h3>ALL YOUR TASKS:</h3>
        <ul className="list__wrapper">{items}</ul>
      </div>
    </section>
  );
};

export default List;
