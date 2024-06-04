import React from 'react'

import Home from './components/Home/Home'
import {Route, Routes} from "react-router-dom"
import Course from './components/Course'
import Courses from './components/Courses/Courses'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'
import Contacts from './components/Contact/Contacts'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App
