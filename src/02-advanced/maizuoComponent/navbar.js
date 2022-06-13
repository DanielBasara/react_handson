import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <div
        style={{
          background: "yellow",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <button style={{ float: "left" }}>back</button>
        <span>卖座电影</span>
        <button
          onClick={() => {
            this.props.event();
          }}
          style={{ float: "right" }}
        >
          center
        </button>
      </div>
    );
  }
}
