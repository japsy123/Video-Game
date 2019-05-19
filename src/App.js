import React from "react";
import "./App.css";
import UserList from "./UserList";
import User from "./User";
import AddUser from "./AddUser";
/*
Great job, Jal coming this far!!! Awesome!! Bravo!! But, as usual keep continuing.

Things to do:-
1. Validation -  Each username has to be unique -Done
2. If someone tries to add a user when one of the fields is empty, the "Add" button should be disabled.
3. Button logic for User List -We should also have a button that lets us toggle between showing and hiding
the number of games the users have played. For example, the button can start
out as "Hide the Number of Games Played" and the app can display "username1
played 0 games." Clicking that button should change the button text to
"Show the Number of Games Played" and the displayed username and score can be
changed to "username1 played \* games

*/
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
        console.log("Push user from app ", this.state.userData);
      }
    );
  }
  render() {
    return (
      <div>
        <AddUser pushUser={this.pushUser} userData={this.state.userData} />
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
