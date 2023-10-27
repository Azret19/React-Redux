import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counterReducer";
import { productsReducer } from "./productsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));