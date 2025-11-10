import counterReducers from "./index";
import todoSlice from "./todo";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        counter: counterReducers, 
        todo: todoSlice,
    }
});

export default store