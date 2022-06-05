import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  myref = React.createRef();
  state = {
    list: [],
  };

  render() {
    return (
      <div>
        <input ref={this.myref}></input>
        <button
          onClick={() => {
            this.handleClickAdd();
          }}
        >
          add
        </button>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {item.mytext}
              <button
                onClick={() => {
                  this.handleClickDel(index);
                }}
              >
                del
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleClickAdd = () => {
    // this.state.list.push(this.myref.current.value);
    let newList = [...this.state.list];
    newList.push({
      id: Math.random() * 10000000000000000,
      mytext: this.myref.current.value,
    });
    this.setState({ list: newList });
    console.log(newList);
  };
  handleClickDel = (index) => {
    console.log(index);
    let delList = [...this.state.list];
    delList.splice(index, 1);
    this.setState({ list: delList });
  };
}

/* refs(引用)不确定到底是哪个input所以不好用最好别用 */
