import { combineReducers } from "redux";
import sidebarReducer from "./sidebarReducer";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
