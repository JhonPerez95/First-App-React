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
    this.removeTask = this.removeTask.bind(this);
  }

  handleAddtask(task) {
    // console.log(this.state.tasks);
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  }

  removeTask(index) {
    if (window.confirm("Esta seguro de eliminar?")) {
      // console.log(index);
      this.setState({
        tasks: this.state.tasks.filter((e, i) => {
          return i !== index;
        }),
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation titulo="Task" onNumberTasks={this.state.tasks.length} />
        <div className="container">
          <Task onAllTasks={this.state} onDeleteTask={this.removeTask} />
        </div>
        <div className="container">
          <FormTask onAddTask={this.handleAddtask} />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
