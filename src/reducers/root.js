import userReducer from "./user";
import productReducer from "./product";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    user: userReducer,
    product: productReducer,
})

export default rootReducers;