import { configureStore } from '@reduxjs/toolkit'
import loggedReducer from "./slices/userLoggedIn"
import users from './slices/users'
import projectSlice from './slices/projectSlice'
import userSclice from './slices/userSclice'
import adminLoggedin from './slices/adminLoggedin'
export const store = configureStore({
  reducer: {
    loogedIn: loggedReducer,
    users: users,
    project : projectSlice,
    user: userSclice,
    adminLoggedin: adminLoggedin
  },
})