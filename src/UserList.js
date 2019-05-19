import React, { Component } from "react";

export default class UserList extends Component {
  allUsers() {
    if (this.props.userData) {
      this.props.userData.map(user => (
        <div>
          <p>*********************</p>
          <li>Username: {user.username}</li>
          <li>FirstName: {user.firstName}</li>
          <li>
            <button> Show no. of games</button>
            <p>{this.selected && <p>{user.noOfGames}</p>}</p>
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
