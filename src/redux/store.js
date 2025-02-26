import { configureStore } from "@reduxjs/toolkit"
import quantityReducer from "./quantitySlice"

console.log(quantityReducer);


const store = configureStore({
    reducer: {
        quantity: quantityReducer,
    },
})

export default store