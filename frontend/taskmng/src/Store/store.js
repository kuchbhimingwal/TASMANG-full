import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from "./slices/userLoggedIn"
import users from './slices/users'
import projectSlice from './slices/projectSlice'
import userSclice from './slices/userSclice'
export const store = configureStore({
  reducer: {
    loogedIn: loggedReducer,
    users: users,
    project : projectSlice,
    user: userSclice
  },
})