import React, { Component } from "react";
import axios from "axios";
import "./css/03-middleMan.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filmList: [],
      filmIfo: "",
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
      <div>
        {this.state.filmList.map((item, index) => (
          <FilmItem
            key={index}
            filmData={item}
            onEvent={(evt) => {
              this.setState({
                filmIfo: evt,
              });
            }}
          ></FilmItem>
        ))}

        <FilmDetail filmIfo={this.state.filmIfo}></FilmDetail>
      </div>
    );
  }
}

class FilmItem extends Component {
  render() {
    return (
      <div className="filmItem">
        {console.log(this.props.filmData.name)}
        <h2>{this.props.filmData.name}</h2>
        <img
          src={this.props.filmData.poster}
          alt={this.props.filmData.name}
          onClick={() => {
            this.props.onEvent(this.props.filmData.synopsis);
          }}
        ></img>
      </div>
    );
  }
}

class FilmDetail extends Component {
  render() {
    return <div className="filmDetail">{this.props.filmIfo}</div>;
  }
}
