import React, { Component } from "react";
import axios from "axios";

export default class EditTodo extends Component {
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

  componentDidMount() {
    axios
      .get("https://sametoz.herokuapp.com/todos/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,

          todo_status: response.data.todo_status
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoStatus(e) {
    this.setState({
      todo_status: !this.state.todo_status
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      todo_description: this.state.todo_description,

      todo_status: this.state.todo_status
    };
    axios
      .post(
        "https://sametoz.herokuapp.com/todos/update/" +
          this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Açıklama: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
              placeholder="Örnek: Martılara simit atmayı unutma..."
            />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangeTodoStatus}
                checked={this.state.todo_status}
                value={this.state.todo_status}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Tamamlandı
              </label>
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Güncelle"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
