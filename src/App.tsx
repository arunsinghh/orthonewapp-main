import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";
import ProstheticServices from "./pages/ProstheticServices";
import OrthoticServices from "./pages/OrthoticServices";
import DiabeticCare from "./pages/DiabeticCare";
import PediatricCare from "./pages/PediatricCare";
import Gallery from "./pages/Gallery";
import Facility from "./pages/Facility";
import ScrollToTop from "./components/ScrollToTop";
import BookNow from "./pages/BookNow";

/* Layout Wrapper to use useLocation */
function Layout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* 👇 Only inner pages get padding */}
      <main className={`flex-grow ${!isHome ? "main-padding" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prosthetic-services" element={<ProstheticServices />} />
          <Route path="/orthotic-services" element={<OrthoticServices />} />
          <Route path="/diabetic-care" element={<DiabeticCare />} />
          <Route path="/pediatric-care" element={<PediatricCare />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>

      <Footer />
      <FloatingContact />

    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;