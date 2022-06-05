// console.log("hello react")

import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom"; //把组件渲染到dom中
// // import App from "./01-base/01-class";
import App from "./01-base/11-movie";

// //reactDOM有一个render方法，功能是把组件渲染并构造DOM树，然后插入到页面上某个特定的元素上
// ReactDOM.render(
//   <App></App>,

//   document.getElementById("root")
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
