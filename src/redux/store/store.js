// store.js
import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import sidebarReducer from "../reducers/sidebarReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
});

const store = createStore(rootReducer);

export default store;
