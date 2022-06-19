import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./css/03-middleMan.css";

const GlobalContext = React.createContext();
export default function App() {
  const [filmList, setfilmList] = useState([]);
  const [info, setinfo] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3000/test.json`).then((res) => {
      // console.log(res.data);
      setfilmList(res.data.data.films);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        call: "打电话",
        sms: "短信",
        info: info,
        changeInfo: (value) => {
          setinfo(value);
        },
      }}
    >
      <div>
        {filmList.map((item, index) => (
          <FilmItem key={index} filmData={item}></FilmItem>
        ))}

        <FilmDetail></FilmDetail>
      </div>
    </GlobalContext.Provider>
  );
}

function FilmItem(props) {
  const value = useContext(GlobalContext);
  console.log("********", value);
  return (
    <div className="filmItem">
      {console.log(props.filmData.name)}
      <h2>{props.filmData.name}</h2>
      <img
        src={props.filmData.poster}
        alt={props.filmData.name}
        onClick={() => {
          console.log(props.filmData.synopsis);
          value.changeInfo(props.filmData.synopsis);
        }}
      ></img>
    </div>
  );
}

function FilmDetail() {
  const value = useContext(GlobalContext);

  return <div className="filmDetail">fileDetil{value.info}</div>;
}
