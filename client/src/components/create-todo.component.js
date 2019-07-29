import React, { Component } from "react";
import axios from "axios";

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoStatus = this.onChangeTodoStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_status: false
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeTodoStatus(e) {
    this.setState({
      todo_status: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("Form submit succesfully!");
    console.log("Todo Description: " + this.state.todo_description);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_status: this.state.todo_status
    };
    axios
      .post("https://sametoz.herokuapp.com/todos/add", newTodo)
      .then(res => console.log(res.data));

    this.setState({
      todo_description: "",
      todo_status: false
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Yeni Todo Oluştur</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Açıklama:</label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Oluştur" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
