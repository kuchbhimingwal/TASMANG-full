import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Project from './pages/Project';
import Tasks from './pages/Tasks';
import MyTasks from './pages/MyTasks';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
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
          <Route path="tasks" element={<Tasks />} />
          <Route path="mytasks" element={<MyTasks />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profileedit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
