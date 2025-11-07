import counterReducers from "./index";
import todoSlice from "./todo";
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        counterReducers: counterReducers, 
        todoSlice: todoSlice,
        
    }
});

export default store