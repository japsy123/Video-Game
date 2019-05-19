import React, { Component } from "react";
import User from "./User";

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      fname: "",
      games: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkUser(user) {
    console.log("checkuser ", user);
    console.log(this.props.userData.length);

    if (this.props.userData.length >= 1) {
      this.props.userData.forEach(e => {
        if (e.uname === user.uname) {
          console.log("Cant add. Already user exits by same user name");
        } else {
          this.props.pushUser(user);
        }
      });
    } else {
      this.props.pushUser(user);
      console.log("else");
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // get our form data out of state
    const { uname, fname, games } = this.state;

    this.checkUser({ uname, fname, games });
    // console.log(this.props.pushUser);
  }

  render() {
    const { uname, fname } = this.state;

    return (
      <div>
        <h1>***Add a new User***</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="uname"
            value={uname}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={this.onChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
