import './App.css';
import Header from "./components/common/heading/Header"
import Footer from "./components/common/footer/Footer"
import Home from './components/Home/Home'
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Details from './components/pricing/details';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Payment from './components/allcourses/Payment';
import Profile from './components/auth/Profile';
import Add from './components/Home/Add';
import Post from './components/blog/Post';

import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useUserStore } from './store/user';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const setRefreshToken = useUserStore((state) => state.setRefreshToken)

  const handleLogin = (token) => {
    console.log(token);
    setIsLoggedIn(true);
    setToken(token);
    setAccessToken(token.access);
    setRefreshToken(token.refresh);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<CourseHome />} />
        <Route path='/tutor' element={<Pricing />} />
        <Route path='/journal' element={<Blog />} />
        {/* <Route path='/contact' element={<Profile />} /> */}
        <Route path='/details' element={<Details />} />


        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={isLoggedIn ? (
          <Link to="/" />
        ) : (
          <Login handleLogin={handleLogin} />
        )} />
        <Route path='/register' element={<Register />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/post' element={<Post/>} />
          <Route path='/add' element={<Add/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
