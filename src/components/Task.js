import React, { Component } from "react";

import { tasks } from "../data/task.json";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks,
    };
  }
  render() {
    return (
      <div className="row mt-4">
        {this.state.tasks.map((task, i) => (
          <div className="col-md-4 p-2" key={i}>
            <div className="card mt-3">
              <div className="card-header">
                <h3>{task.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {task.priority}
                </span>
              </div>
              <div className="card-body">
                <p>{task.description}</p>
                <p>
                  <mark>{task.responsable} </mark>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Task;
