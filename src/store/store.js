import { configureStore } from '@reduxjs/toolkit'
import {todoSlice} from "./todoslice"

export const store= configureStore({
    reducer: todoSlice.reducer
});