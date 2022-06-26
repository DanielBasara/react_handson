import React, { useState } from "react";
import store from "../redux/store";

export default function Cinemas(props) {
  const [city, setcity] = useState(store.getState().CityReducer.cityName);
  return (
    <div>
      Cinemas
      <div
        onClick={() => {
          props.history.push("/city");
        }}
      >
        {city}
      </div>
    </div>
  );
}
