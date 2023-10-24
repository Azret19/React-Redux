import products from "../data/products.json"

const initialState = {
    products
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: [...state.products, action.payload],
            }
        default:
            return state
    }
}
