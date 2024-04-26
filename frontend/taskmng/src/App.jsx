import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Project from './pages/Project';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
