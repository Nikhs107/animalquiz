import React, { Component } from "react";
import auth from "./authService";
import http from "./httpService";
class Home extends Component {
  state = {
    user:{name: ""}
  };
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let s1 = { ...this.state };
    s1.user[input.name] = input.value;
    this.setState(s1);
  };
  async register(url, obj) {
    let response = await http.post(url, obj);
    let { data } = response;
    auth.login(data);
    window.location = "/quiz";
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.register("/register", this.state.user);
  };
  render() {
    let { name } = this.state.user;
    return (
      <div className="container text-center">
        <h4 className="text-danger">Welcome to Animal Quiz</h4>
        <div className="row">
          <div className="col-3"></div>
          
        <div className="col-6 form-group my-2">
          <label className="form-label">Enter Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter user name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-3"></div>
        </div>
        <button
          className="btn btn-primary"
          disabled={!name}
          onClick={this.handleSubmit}
        >
          Enter
        </button>
      </div>
    );
  }
}
export default Home;
