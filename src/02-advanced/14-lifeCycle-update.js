import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    myname: "Jo",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ myname: "小米" });
          }}
        >
          click
        </button>
        <div>{this.state.myname}</div>
      </div>
    );
  }
  UNSAFE_componentWillUpdate() {
    console.log("will update");
  }
  componentDidUpdate(prevProps, prevState) {
    //会执行多次
    console.log("did update");
    axios.get("/test.json").then((res) => {
      console.log(res.data.film);
    });
  }
}
