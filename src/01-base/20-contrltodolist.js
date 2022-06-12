import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  //   myref = React.createRef();
  state = {
    list: [],
    mytext: "",
  };

  render() {
    return (
      <div>
        <input
          value={this.state.mytext}
          onChange={(evt) => this.setState({ mytext: evt.target.value })}
        ></input>
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
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => {
                  this.handleChecked(index);
                }}
              ></input>
              <span
                style={{
                  textDecoration: item.isChecked ? "line-through" : "",
                }}
              >
                {item.mytext}
              </span>
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

  handleChecked(index) {
    let newList = [...this.state.list];
    newList[index].isChecked = !newList[index].isChecked;
    this.setState({ list: newList });
  }

  handleClickAdd = () => {
    // this.state.list.push(this.myref.current.value);
    let newList = [...this.state.list];
    newList.push({
      id: Math.random() * 10000000000000000,
      mytext: this.state.mytext,
      isChecked: false,
    });
    this.setState({ list: newList });
    this.setState({ mytext: "" });
    // console.log(newList);
  };
  handleClickDel = (index) => {
    console.log(index);
    let delList = [...this.state.list];
    delList.splice(index, 1);
    this.setState({ list: delList });
  };
}

/* refs(引用)不确定到底是哪个input所以不好用最好别用 */
