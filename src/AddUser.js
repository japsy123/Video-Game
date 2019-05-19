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
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // get our form data out of state
    const { uname, fname, games } = this.state;
    console.log(this.props.pushUser);
    this.props.pushUser({ uname, fname, games });
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
