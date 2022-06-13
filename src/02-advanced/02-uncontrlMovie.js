import React, { Component } from "react";
import "./css/02-maizuo.css";
import Film from "./maizuoComponent/film";
import Center from "./maizuoComponent/center";
import Cinema from "./maizuoComponent/cinema";
import Tabbar from "./maizuoComponent/tabbar";
import Navbar from "./maizuoComponent/navbar";

export default class App extends Component {
  state = {
    current: 1,
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