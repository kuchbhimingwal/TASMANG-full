import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loggedInSlice = createSlice({
  name: 'loogedIn',
  initialState,
  reducers:{
    loggeed: (state) =>{
      state.value = true
    },
    out: (state)=>{
      state.value = false
    },
  },
})

export const { loggeed, out } = loggedInSlice.actions;

export default loggedInSlice.reducer;