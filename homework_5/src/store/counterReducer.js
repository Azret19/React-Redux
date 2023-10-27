const initialState = {
    counter: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + action.payload };
        default:
            return state;
    }
};

export const increaseCounter = (number) => {
    return { type: "INCREMENT", payload: number };
};