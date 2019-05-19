import React, { Component } from "react";

export default class UserList extends Component {
  allUsers() {
    if (this.props.userData) {
      return this.props.userData.map(user => (
        <div>
          <p>*********************</p>
          <li>Username: {user.uname}</li>
          <li>FirstName: {user.fname}</li>
          <li>
            <button> Show no. of games</button>
            <p>{this.selected && <p>{user.games}</p>}</p>
          </li>
          <p>*********************</p>
        </div>
      ));
    }
  }
  render() {
    return (
      <div>
        <h1>List of all user:</h1>
        {this.allUsers()}
      </div>
    );
  }
}
