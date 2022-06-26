import React, { useEffect, useState } from "react";
import IndexRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";
import store from "./redux/store";
import "./views/css/App.css";

export default function App() {
  const [showTabbar, setShowTabbar] = useState({
    show: store.getState().TabbarReducer.show,
    cityName: store.getState().CityReducer.cityName,
  });
  console.log("触发:", showTabbar);
  useEffect(() => {
    store.subscribe(() => {
      setShowTabbar({ show: store.getState().TabbarReducer.show });
      console.log("app中订阅", store.getState());
    });
  }, []);

  return (
    <div>
      <IndexRouter>{showTabbar.show && <Tabbar></Tabbar>}</IndexRouter>
    </div>
  );
}
