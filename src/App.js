import React from "react";
import "./App.css";
import UserList from "./UserList";
import User from "./User";
import AddUser from "./AddUser";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      selected: false
    };
    this.pushUser = this.pushUser.bind(this);
  }

  pushUser(user) {
    console.log("User coming from AddUser   " + user);
    this.setState(
      () => ({
        userData: [...this.state.userData, user]
      }),
      () => {
        console.log(this.state.userData);
      }
    );
  }
  render() {
    return (
      <div>
        <AddUser pushUser={this.pushUser} />
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
