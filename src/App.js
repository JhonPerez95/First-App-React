import React from "react";
import logo from "./assets/img/logo.svg";
import "./assets/css/App.css";

import Task from "./components/Task";
import Navigation from "./components/Navigation";
import FormTask from "./components/FormTask";

// import { tasks } from "./data/task.json";

function App() {
  return (
    <div className="App">
      <Navigation titulo="Task" />
      <div className="container">
        <Task />
      </div>
      <div className="container">
        <FormTask />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
