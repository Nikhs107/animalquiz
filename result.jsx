import React, { Component } from "react";
import http from "./httpService";
class Result extends Component {
  async postData(url, obj) {
    let response = await http.post(url, obj);
  }
  handleSubmit = () => {
    let { name, wrong, attempt, restart } = this.props;
    let today = new Date();
    let day = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    let obj = {
      name: name,
      wronganswer: wrong,
      attempt: attempt+1,
      date:day,
      time:time
    };
    this.postData("/details", obj);
    restart();
  };
  handleExit = () => {
    window.location = "/home";
  };
  render() {
    let { name, wrong, attempt } = this.props;
    return (
      <div className="text-center bg-light border">
        <h5>Name : {name}</h5>
        <h6>Total wrong Answer : {wrong}</h6>
        <h6>Total Attempt : {attempt + 1}</h6>
        <h6>{new Date().toLocaleString() + ""}</h6>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleSubmit()}
        >
          Restart
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.handleExit()}
        >
          Exit
        </button>
      </div>
    );
  }
}
export default Result;
