import axios from "axios";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [action.payload, ...state.products],
            }
        default:
            return state
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await axios.get("https://dummyjson.com/products?limit=10&skip=10");
        return dispatch({type: "SET_PRODUCTS", payload: response.data.products});
    }
}

export const asyncCreateCart = (data) => {
    return async (dispatch) => {
        const response = await axios.post('https://dummyjson.com/carts/add', {
            userId: 1,
            products: data
        })
        return dispatch({type: "ADD_PRODUCTS", payload: response.data.products});
    }
}