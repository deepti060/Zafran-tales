import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutPage from './Components/AboutPage/AboutPage';
import ContactPage from './Components/AboutPage/ContactPage';
import CareerPage from './Components/AboutPage/CareerPage';
import ServicePage from './Components/AboutPage/ServicePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/ZafranServices" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
