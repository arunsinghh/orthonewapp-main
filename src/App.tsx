import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import ScrollToTop from "./components/ScrollToTop";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const ProstheticServices = lazy(() => import("./pages/ProstheticServices"));
const OrthoticServices = lazy(() => import("./pages/OrthoticServices"));
const DiabeticCare = lazy(() => import("./pages/DiabeticCare"));
const PediatricCare = lazy(() => import("./pages/PediatricCare"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Facility = lazy(() => import("./pages/Facility"));
const BookNow = lazy(() => import("./pages/BookNow"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const OurJourney = lazy(() => import("./pages/OurJourney"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));
import { Navigate } from "react-router-dom";

/* Protected Route Component */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("adminToken");
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

/* Layout Wrapper to use useLocation */
function Layout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* 👇 Only inner pages get padding */}
      <main className={`flex-grow ${!isHome ? "main-padding" : ""}`}>
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prosthetic-services" element={<ProstheticServices />} />
            <Route path="/orthotic-services" element={<OrthoticServices />} />
            <Route path="/diabetic-care" element={<DiabeticCare />} />
            <Route path="/pediatric-care" element={<PediatricCare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Suspense>
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