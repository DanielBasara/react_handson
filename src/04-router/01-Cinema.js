import React from "react";
import IndexRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";

export default function App() {
  return (
    <div>
      <IndexRouter>
        <Tabbar></Tabbar>
      </IndexRouter>
    </div>
  );
}
