import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
  }

  deleteTask(i) {
    this.props.onDeleteTask(i);
  }

  render() {
    return (
      <div className="row mt-4">
        {this.props.onAllTasks.tasks.map((task, i) => (
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
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={this.deleteTask.bind(this, i)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Task;
