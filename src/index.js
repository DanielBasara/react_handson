// console.log("hello react")

import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom"; //把组件渲染到dom中
// // import App from "./01-base/01-class";
// import App from "./01-base/11-movie";
// import App from "./01-base/13-setState";
// import App from "./01-base/14-betterScroll";
// import App from "./01-base/15-props";
// import App from "./01-base/16-propsfunctionCom";
// import App from "./01-base/17-uncontrol";
// import App from "./01-base/18-contrlComp";
// import App from "./01-base/19-contrlCinema";
// import App from "./01-base/20-contrltodolist";
// import App from "./02-advanced/01-sonTofather";
// import App from "./02-advanced/02-uncontrlMovie";
// import App from "./02-advanced/03-contrlMovie";
import App from "./02-advanced/04-sonAfatherTable";

// //reactDOM有一个render方法，功能是把组件渲染并构造DOM树，然后插入到页面上某个特定的元素上
// ReactDOM.render(
//   <App></App>,

//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
