import { combineReducers } from "redux";

import loggedReducer from "./logged";

const allReducers = combineReducers({
  isLogged: loggedReducer,
});

export default allReducers;
