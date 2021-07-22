import productReducers from "./reducers/productReducers"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    productReducers,
})
export default rootReducer;