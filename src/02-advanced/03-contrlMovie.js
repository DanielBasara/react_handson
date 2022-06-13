import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuoComponent2/film";
import Center from "./maizuoComponent2/center";
import Cinema from "./maizuoComponent2/cinema";
import Tabbar from "./maizuoComponent2/tabbar";
import Navbar from "./maizuoComponent2/navbar";

export default class App extends Component {
  state = {
    current: 1,
    list: [
      {
        id: 1,
        text: "电影",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
  };
  render() {
    return (
      <div>
        <Navbar
          event={() => {
            console.log("navbar");
            this.setState({ current: 3 });
          }}
        ></Navbar>

        {this.showPage(this.state.current)}

        <Tabbar
          event={(evt) => {
            console.log(evt);
            this.setState({ current: evt });
          }}
          current={this.state.current}
          list={this.state.list}
        ></Tabbar>
      </div>
    );
  }
  //   handleClick = (id) => {
  //     this.setState({ current: id });
  //   };
  showPage = (current) => {
    //   return this.state.list[this.state.current - 1].page;
    switch (current) {
      case 1:
        return <Film></Film>;
      case 2:
        return <Cinema></Cinema>;
      case 3:
        return <Center></Center>;
      default:
        return null;
    }
  };
}
