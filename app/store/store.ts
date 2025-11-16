import counterReducers from "./index";
import todoSlice from "./todo";
import myContacts from "./myContacts"
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({
    reducer: {
        counter: counterReducers, 
        todo: todoSlice,
        contacts: myContacts,
    },
});

export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;