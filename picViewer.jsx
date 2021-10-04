import React, { Component } from "react";
class PicViewer extends Component {
  render() {
    let { pic, animals, checkAnswer, index, msg } = this.props;
    return (
      <div className="text-center bg-light border">
        <br />
        <img src={pic} height="55%" width="75%" />
        <br />
        {animals[index].options.map((op1) => (
          <button
            className="btn btn-info text-white m-2"
            style={{ cursor: "pointer" }}
            onClick={() => checkAnswer(op1)}
          >
            {op1}
          </button>
        ))}
        <br/>
        {msg && <span className="text-danger">{msg}</span>}
      </div>
    );
  }
}
export default PicViewer;
