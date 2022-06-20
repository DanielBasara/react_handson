import React, { useEffect, useState } from "react";

export default function App() {
  const [isCreated, setisCreated] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setisCreated(!isCreated);
        }}
      >
        click
      </button>
      {isCreated && <Child></Child>}
    </div>
  );
}

function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log("resize");
    };
    var timer = setInterval(() => {
      console.log("111");
    }, 1000);
    return () => {
      console.log("组件销毁");
      window.onresize = null;
      clearInterval(timer);
    };
  }, []);
  return <div>child</div>;
}

//组件销毁，定时器未销毁，useEffect没有依赖的时候在组件销毁的时候会执行return里的函数
