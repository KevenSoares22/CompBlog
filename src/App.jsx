import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Templates
import Home from './templates/Home/Home.jsx';
import About from './templates/About/About.jsx';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './templates/Login/Login';
import Register from './templates/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
