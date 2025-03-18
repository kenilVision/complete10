import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Layout/Navbar'
import Login from './Page/Login ';
import Profile from './Page/Profile';
import About from './Page/About';
import Home from './Page/Home';
import SignUp from './Page/SignUp';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Login" element={<Login />} />
      <Route path='/SignUp' element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
