import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Todo = props => (
  <tr
    className={props.todo.todo_status ? "table-success" : "table-default"}
    table-primary
  >
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_status ? "Tamamlandı" : "Tamamlanmadı"}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Düzenle</Link>
    </td>
  </tr>
);

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  todoList() {
    return this.state.todos.map(function(currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  componentDidMount() {
    axios
      .get("https://sametoz.herokuapp.com/todos")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  // Bu fonksiyon sayesinde değişiklikleri anlık gösterebiliyorum fakat sonsuz döngüye giriyor
  // ve işlemci kullanımı rahatsız edici seviyede yükseliyor.
  // componentDidUpdate() {
  //   axios
  //     .get("https://sametoz.herokuapp.com/todos")
  //     .then(response => {
  //       this.setState({ todos: response.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div>
        <table id="todoTable" className="table" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Açıklama</th>
              <th>Durum</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodosList;
