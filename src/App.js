import React from "react";
import logo from "./assets/img/logo.svg";
import "./assets/css/App.css";

import Task from "./components/Task";
import Navigation from "./components/Navigation";
import FormTask from "./components/FormTask";

import { tasks } from "./data/task.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks,
    };

    this.handleAddtask = this.handleAddtask.bind(this);
  }

  handleAddtask(task) {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation titulo="Task" onNumberTasks={this.state.tasks.length} />
        <div className="container">
          <Task />
        </div>
        <div className="container">
          <FormTask onAddTask={this.handleAddtask} />
          {console.log(this.state)}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
