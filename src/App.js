import axios from "axios";
import React, { Component } from "react";
import UserList from "./components/UserList";
import "./style.css";
class App extends Component {
  state = { users: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: result.data });
  }

  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default App;
