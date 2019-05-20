import React, { Component } from "react";
import { throwStatement } from "@babel/types";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true
    };
    this.changeButton = this.changeButton.bind(this);
  }

  changeButton() {
    this.setState(() => ({
      selected: !this.state.selected
    }));
  }

  allUsers() {
    if (this.props.userData) {
      return this.props.userData.map(user => (
        <div>
          <p>*********************</p>
          <li>Username: {user.uname}</li>
          <li>FirstName: {user.fname}</li>
          <li>
            <button onClick={this.changeButton}>
              {" "}
              {this.state.selected ? "Hide" : "Show"}
            </button>
            <p>{this.state.selected && <p>{user.games}</p>}</p>
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
