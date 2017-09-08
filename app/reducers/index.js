import { combineReducers } from "redux";
import reposReducer from "./reposReducer";
import autocompleteReducer from "./autocompleteReducer";

const rootReducer = combineReducers({
  repos: reposReducer,
  autocomplete: autocompleteReducer
});

export default rootReducer;
