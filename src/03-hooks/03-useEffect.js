import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    axios.get("/test.json").then((res) => {
      console.log(res);
      setlist(res.data.film);
    });

    return () => {};
  }, []); //传空数组实现只执行一次

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
