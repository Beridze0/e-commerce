import { configureStore } from "@reduxjs/toolkit"
import quantityReducer from "./quantitySlice"
import dataReducer from './dataSlice'



const store = configureStore({
    reducer: {
        quantity: quantityReducer,
        data: dataReducer,
    },
})

export default store