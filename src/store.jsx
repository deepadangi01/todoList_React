import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./dotoSlice";
const store = configureStore({
    reducer:{
        todo:taskReducer
    }

})
export default store;