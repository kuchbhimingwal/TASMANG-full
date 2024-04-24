import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from "./slices/userLoggedIn"
export const store = configureStore({
  reducer: {
    loogedIn: loggedReducer
  },
})