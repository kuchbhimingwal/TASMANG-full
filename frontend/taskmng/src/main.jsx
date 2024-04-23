import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
