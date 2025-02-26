import { createSlice } from "@reduxjs/toolkit";

const initialState = { techData: [] }

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setTechData: (state, action) => {
            state.techData = action.payload
        }
    }
})

export const { setTechData } = dataSlice.actions
export default dataSlice.reducer
