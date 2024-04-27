import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from "./slices/userLoggedIn"
import users from './slices/users'
export const store = configureStore({
  reducer: {
    loogedIn: loggedReducer,
    users: users
  },
})