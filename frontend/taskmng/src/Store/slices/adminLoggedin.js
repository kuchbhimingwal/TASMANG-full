import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const adminloggedInSlice = createSlice({
  name: 'adminloggedInSlice',
  initialState,
  reducers:{
    loged: (state) =>{
      state.value = true
    },
    adminOut: (state)=>{
      state.value = false
    },
  },
})

export const { loged, adminOut } = adminloggedInSlice.actions;

export default adminloggedInSlice.reducer;