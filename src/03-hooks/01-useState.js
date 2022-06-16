import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("jo");
  const [age, setAge] = useState(100);

  return (
    <div>
      <button
        onClick={() => {
          setName("XiaoMing");
          setAge(200);
        }}
      >
        Click
      </button>
      <div> {name}</div>
      <div> {age}</div>
    </div>
  );
}
