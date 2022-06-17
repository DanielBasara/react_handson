import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setname] = useState("jo");
  useEffect(() => {
    setname(name.substring(0, 1).toUpperCase() + name.substring(1));

    return () => {};
  }, [name]);
  //第一次执行一次，name（依赖）更新也会执行
  return (
    <div>
      {name}
      <button onClick={() => setname("xiaoming")}>click</button>
    </div>
  );
}
