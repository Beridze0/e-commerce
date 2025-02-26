import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -=1
        },
    }
})

export const { increment, decrement } = quantitySlice.actions
export default quantitySlice.reducer