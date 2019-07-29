import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

function App() {
  return (
    <Router>
      <div className="container w-50 p-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <Link to="/" className="navbar-brand">
            Yapılacaklar Listesi
          </Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Oluştur
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
