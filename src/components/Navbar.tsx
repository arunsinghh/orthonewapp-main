import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
  setDesktopServicesOpen(false);
  setMobileServicesOpen(false);
  setMobileOpen(false);
}, [location]);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  };

  return (
    <>
      <nav className={scrolled ? "navbar active" : "navbar"}>
        <div className="container nav-wrapper">

          {/* LOGO */}
          <div className="logo">
            <NavLink to="/" onClick={closeAll}>
              OrthoproIndia
            </NavLink>
          </div>

          {/* DESKTOP MENU */}
          <ul className="nav-menu desktop">

            <li>
              <NavLink to="/" onClick={closeAll}>
                Home
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="dropdown">

  <span
    className="services-title"
    onClick={() => setDesktopServicesOpen(prev => !prev)}
  >
    Services ▾
  </span>

  {desktopServicesOpen && (
    <ul className="dropdown-menu">
      <li>
        <NavLink to="/prosthetic-services">
          Prosthetics
        </NavLink>
      </li>
      <li>
        <NavLink to="/orthotic-services">
          Orthotics
        </NavLink>
      </li>
      <li>
        <NavLink to="/pediatric-care">
          Pediatric Care
        </NavLink>
      </li>
      <li>
        <NavLink to="/diabetic-care">
          Diabetic Care
        </NavLink>
      </li>
    </ul>
  )}

</li>

            <li>
              <NavLink to="/gallery" onClick={closeAll}>
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink to="/facility" onClick={closeAll}>
                Facility
              </NavLink>
            </li>

          </ul>

          {/* BOOK BUTTON (DESKTOP) */}
          <NavLink
            to="/book-now"
            className="book-btn desktop"
            onClick={closeAll}
          >
            Book Now
          </NavLink>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={closeAll}></div>
      )}

      {/* MOBILE DRAWER */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>

        <NavLink to="/" onClick={closeAll}>Home</NavLink>

        {/* Mobile Services Toggle */}
        <div
          className="mobile-services-title"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        >
          Services ▾
        </div>

        {mobileServicesOpen && (
          <div className="mobile-submenu">
            <NavLink to="/prosthetic-services" onClick={closeAll}>
              Prosthetics
            </NavLink>
            <NavLink to="/orthotic-services" onClick={closeAll}>
              Orthotics
            </NavLink>
            <NavLink to="/pediatric-care" onClick={closeAll}>
              Pediatric Care
            </NavLink>
            <NavLink to="/diabetic-care" onClick={closeAll}>
              Diabetic Care
            </NavLink>
          </div>
        )}

        <NavLink to="/gallery" onClick={closeAll}>Gallery</NavLink>
        <NavLink to="/facility" onClick={closeAll}>Facility</NavLink>

        <NavLink
          to="/book-now"
          className="mobile-book-btn"
          onClick={closeAll}
        >
          Book Now
        </NavLink>

      </div>
    </>
  );
};

export default Navbar;