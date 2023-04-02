import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//Templates
import Home from './templates/Home/Home.jsx';
import About from './templates/About/About.jsx';

//Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './templates/Login/Login';
import Register from './templates/Register/Register';
import { useAuthentication } from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';
import CreatePost from './templates/CreatePost/CreatePost';
import Dashboard from './templates/Dashboard/Dashboard';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
  if (loadingUser) {
    return <p className="loadUser">Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}></Route>
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />}></Route>
              <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/" />}></Route>
              <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
