import { createSlice } from "@reduxjs/toolkit";
const counter2 = createSlice({
    name:" counter2",
    initialState:{value:10},
    reducers:{    
      increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },}
})

export const {increment,decrement,reset}=counter2.actions
export default counter2.reducer;