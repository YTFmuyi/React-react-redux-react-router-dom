import { combineReducers } from 'redux'

import count from "./changeCount";
import name from "./changeName";
const rootReducer = combineReducers({
    count,
    name
});

export default rootReducer
