import React, { Component } from "react";

export default class UserList extends Component {
  render() {
    return (
      <div>
        <h1>List of all user:</h1>
        {this.props.allUsers}
      </div>
    );
  }
}
