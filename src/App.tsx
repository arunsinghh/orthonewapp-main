import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProstheticServices from './pages/ProstheticServices';
import OrthoticServices from './pages/OrthoticServices';
import DiabeticCare from './pages/DiabeticCare';
import PediatricCare from './pages/PediatricCare';
import Gallery from './pages/Gallery';
import Facility from './pages/Facility';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prosthetic-services" element={<ProstheticServices />} />
          <Route path="/orthotic-services" element={<OrthoticServices />} />
          <Route path="/diabetic-care" element={<DiabeticCare />} />
          <Route path="/pediatric-care" element={<PediatricCare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facility" element={<Facility />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
