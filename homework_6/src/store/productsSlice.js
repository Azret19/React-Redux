import products from "../data/products.json"
import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products,
        quantity: 0

    },
    reducers: {
        removeProducts: (state, action) => {
            state.products = state.products.filter((product)=> product.id !== action.payload)
        },
        increaseQuantity: (state, action) => {
            state.quantity += 1
        }
    }
})

export const productsReducer = productsSlice.reducer
export const productsActions = productsSlice.actions

