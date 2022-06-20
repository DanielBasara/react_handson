import React, { useState } from "react";

export default function App() {
  const [count, setcount] = useState(0);
  //useState是个记忆函数
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        add
      </button>
      {count}
    </div>
  );
}
