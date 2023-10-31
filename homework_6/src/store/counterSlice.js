import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increaseCounter: (state, action) => {
            state.value += 1
        }
    }
})

export const counterReducer = counterSlice.reducer
export const counterActions = counterSlice.actions