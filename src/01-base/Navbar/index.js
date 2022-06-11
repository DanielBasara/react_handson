import React, { Component } from "react";
import checkProps from "prop-types";

console.log(checkProps);
export default class Navbar extends Component {
  static propTypes = {
    title: checkProps.string,
    leftShow: checkProps.bool,
  };

  static defaultProps = {
    leftShow: true,
  };

  render() {
    //接受属性的时候需要做验证
    let { title, leftShow } = this.props; //解构
    console.log(this.props);
    return (
      <div>
        {leftShow && <button>返回</button>}
        {title}
        <button>home</button>
      </div>
    );
  }
}

//属性加默认值
// Navbar.defaultProps = {
//   leftShow: true,
// };

//类属性 检查属性类型
// Navbar.propTypes = {
//   title: checkProps.string,
//   leftShow: checkProps.bool,
// };

class Test {
  a = 1; //对象属性
  static b = 100; //静态的 为类属性
}

//类属性
Test.b = 100;

var obj = new Test();
console.log(obj.a, Test.b);
