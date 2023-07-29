import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducer/AppSlice"

const store=configureStore({
    reducer:{
        todo:todoReducer
    }
})

export default store