import React, { Component } from "react";

class FormTask extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      description: "",
      responsable: "",
      priority: "low",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    // console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault(); // Evita que se Refresque
    this.props.onAddTask(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              value={this.state.title}
              placeholder="Titulo"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              value={this.state.description}
              placeholder="Descripcion"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              onChange={this.handleInput}
              className="form-control"
              value={this.state.responsable}
              placeholder="Responsable"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              onChange={this.handleInput}
              className="form-control"
              value={this.state.priority}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default FormTask;
