import axios from "axios";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class UserList extends Component {
  state = { users: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    await new Promise((x) => setTimeout(x, 1000));
    this.setState({ users: result.data });
  }

  render() {
    return (
      <div>
        <div className="user">
          {this.state.users.length > 0 ? (
            <div>
              <h2 className="main">Our Clients</h2>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr class="table-secondary">
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h2 className="main">Loading users...</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default UserList;
