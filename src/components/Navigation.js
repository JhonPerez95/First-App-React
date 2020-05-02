import React, { Component } from "react";

import { tasks } from "../data/task.json";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks,
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {this.props.titulo}
          <span className="badge badge-pill badge-light ml-2">
            {this.state.tasks.length}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navigation;
