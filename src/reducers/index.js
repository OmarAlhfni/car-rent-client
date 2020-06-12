import { combineReducers } from "redux";

import switchs from "./switchReduser";
import cars from "./re.cars";
import owner from "./re.owner";

export default combineReducers({
  switchs,
  cars,
  owner
});
