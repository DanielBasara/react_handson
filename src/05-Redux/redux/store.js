import { legacy_createStore as createStore, combineReducers } from "redux";
import CityReducer from "./reducers/CityReducer";
import TabbarReducer from "./reducers/TabbarReducer";
//塞给prevState一个初始状态
// const reducer = (prevState = { show: true, cityName: "北京" }, action) => {
//   let newState = { ...prevState };
//   console.log(action);
//   switch (action.type) {
//     case "hide-tabbar":
//       newState.show = false;
//       return newState;
//     case "show-tabbar":
//       newState.show = true;
//       return newState;

//     case "change-city":
//       newState.cityName = action.value;

//       return newState;
//     default:
//       return prevState;
//   }
// };
const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
});
const store = createStore(reducer);

export default store;
