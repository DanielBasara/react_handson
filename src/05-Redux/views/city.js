import React, { useState } from "react";
import store from "../redux/store";

export default function City(props) {
  const [Citylist, setCitylist] = useState(["北京", "上海", "深圳", "广州"]);
  return (
    <div>
      city
      <ul>
        {Citylist.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              store.dispatch({
                type: "change-city",
                value: item,
              });

              props.history.push("/cinemas");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
