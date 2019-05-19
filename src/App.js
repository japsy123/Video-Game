import React from "react";
import "./App.css";
import UserList from "./UserList";
import User from "./User";

class App extends React.Component {
  render() {
    return (
      <div>
        <User />
        <UserList />
      </div>
    );
  }
}

export default App;
