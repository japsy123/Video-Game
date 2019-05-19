import React from "react";
import "./App.css";
import UserList from "./UserList";
import User from "./User";
import AddUser from "./AddUser";
//  Steps for any React app

//  1. Divide into components
// 2.  Build A Static Version in React
//  2 a. Start fist with bare bone code
// 2 b. Determine the data in our app. List it all down first
// 2 c. You’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version.

class App extends React.Component {
  // Step 2- determine the data
  // 1. User Array of objects to hold all properties of each User
  // 2. Method to loop over Users for UserList
  // 3. Toggle button
  userData = [
    { username: "jal", firstName: "Jal", lastName: "Panchal", noOfGames: 0 }
  ];

  allUsers = this.userData.map(user => <li>{user.username}</li>);
  render() {
    return (
      <div>
        <AddUser userData={this.userData} />
        <UserList allUsers={this.allUsers} />
      </div>
    );
  }
}

export default App;
