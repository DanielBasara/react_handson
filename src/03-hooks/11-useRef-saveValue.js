import React, { useState, useRef } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  //useRef保存一个变量

  var mycount = useRef(0);
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
          mycount.current++;
        }}
      >
        add
      </button>
      {count}-{mycount.current}
    </div>
  );
}
