import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { productsReducer } from "./productsReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer
})

export const store = createStore(rootReducer);