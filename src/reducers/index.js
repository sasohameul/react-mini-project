import { combineReducers } from "redux";
import counter from "./counter";
import { todo } from "./todo";
import { filter } from "./filter";

const rootReducer = combineReducers({
  counter,
  todo,
  filter,
});

export default rootReducer;