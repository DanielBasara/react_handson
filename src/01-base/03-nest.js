import React, { Component } from "react";

const Child = () => <div>child</div>;

class Navbar extends Component {
  render() {
    return (
      <div>
        navbar
        <Child></Child>
      </div>
    );
  }
}

function Swiper() {
  return <div>Swiper</div>;
}

const Tabbar = () => {
  return <div>tabbar</div>;
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    );
  }
}
