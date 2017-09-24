import { combineReducers } from "redux";
import reposReducer from "./repos";
import autocompleteReducer from "./autocomplete";

const rootReducer = combineReducers({
  repos: reposReducer,
  autocomplete: autocompleteReducer
});

export default rootReducer;
