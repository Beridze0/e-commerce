import { configureStore } from "@reduxjs/toolkit"
import quantityReducer from "./quantitySlice"
import dataReducer from './dataSlice'
import { loadState, saveState } from "../localStorage"

const preloadedState = loadState()

const store = configureStore({
    reducer: {
        quantity: quantityReducer,
        data: dataReducer,
    },
    preloadedState,
})

store.subscribe(()=>{
    saveState(store.getState())
})

export default store