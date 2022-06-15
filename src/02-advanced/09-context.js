import React, { Component } from "react";
import axios from "axios";
import "./css/03-middleMan.css";

const GlobalContext = React.createContext();
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      info: "",
    };

    axios.get(`http://localhost:3000/test.json`).then((res) => {
      console.log(res.data);
      this.setState({
        filmList: res.data.film,
      });
    });
  }
  render() {
    return (
      <GlobalContext.Provider
        value={{
          call: "打电话",
          sms: "短信",
          info: this.state.info,
          changeInfo: (value) => {
            this.setState({
              info: value,
            });
          },
        }}
      >
        <div>
          {this.state.filmList.map((item, index) => (
            <FilmItem key={index} filmData={item}></FilmItem>
          ))}

          <FilmDetail></FilmDetail>
        </div>
      </GlobalContext.Provider>
    );
  }
}

class FilmItem extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          console.log(value);

          return (
            <div className="filmItem">
              {console.log(this.props.filmData.name)}
              <h2>{this.props.filmData.name}</h2>
              <img
                src={this.props.filmData.poster}
                alt={this.props.filmData.name}
                onClick={() => {
                  console.log(this.props.filmData.synopsis);
                  value.changeInfo(this.props.filmData.synopsis);
                }}
              ></img>
            </div>
          );
        }}
      </GlobalContext.Consumer>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return <div className="filmDetail">fileDetil{value.info}</div>;
        }}
      </GlobalContext.Consumer>
    );
  }
}
