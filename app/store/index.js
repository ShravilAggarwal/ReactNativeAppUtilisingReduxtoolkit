import { createSlice } from "@reduxjs/toolkit";

const reducerfn = createSlice({
    name: "counterSlice",
    initialState: { counter: 0 },
    reducers: {
        incrementBy: (state,action) => {
            state.counter += action.payload;
        },
        decrementBy: (state,action) => {
            state.counter -= action.payload;
        }
    }
})

export const { incrementBy, decrementBy } = reducerfn.actions;
export default reducerfn.reducer;