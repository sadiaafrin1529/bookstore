import React from 'react'
import  { Toaster } from "react-hot-toast";
import Home from './components/Home/Home'
import {Navigate, Route, Routes} from "react-router-dom"
import Course from './components/Course'
import Courses from './components/Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import Contacts from './components/Contact/Contacts'
import { useAuth } from './context/AuthProvider';
const App = () => {
  const [authUser, setAuthUSer] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={authUser? <Courses />: <Navigate to='/signup'/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App
