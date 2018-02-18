import { combineReducers } from "redux";
import reposReducer from "./repos";

const rootReducer = combineReducers({
  repos: reposReducer
});

export default rootReducer;
