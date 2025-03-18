import React from 'react'; 
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabar from './Layout/Nabar';
import Home from './Page/Home';
import About from './Page/About';
import Profile from './Page/Profile';
import Login from './Page/Login';
import SignUp from './Page/SignUp';


function App() {
  
  return (
    <BrowserRouter>
    <Nabar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
