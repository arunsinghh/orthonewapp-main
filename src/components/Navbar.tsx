import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            OrthoproIndia
          </Link>

          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Services dropdown */}
            <div className="relative group inline-block">
              <button className="flex items-center space-x-1 px-4 py-2 hover:bg-blue-700 rounded-md">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute z-50 hidden group-hover:block w-64 bg-white text-gray-800 shadow-lg rounded-md mt-1">
                <Link to="/prosthetic-services" className="block px-4 py-2 hover:bg-gray-100">Prosthetic Services</Link>
                <Link to="/orthotic-services" className="block px-4 py-2 hover:bg-gray-100">Orthotic Services</Link>
                <Link to="/diabetic-care" className="block px-4 py-2 hover:bg-gray-100">Diabetic Foot & Wound Care</Link>
                <Link to="/pediatric-care" className="block px-4 py-2 hover:bg-gray-100">Pediatric Care</Link>
              </div>
            </div>

            {/* More dropdown */}
            <div className="relative group inline-block">
              <button className="flex items-center space-x-1 px-4 py-2 hover:bg-blue-700 rounded-md">
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute z-50 hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-1">
                <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">Photo Gallery</Link>
                <Link to="/facility" className="block px-4 py-2 hover:bg-gray-100">Our Facility</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center px-4 py-2 bg-blue-500"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  servicesOpen ? 'max-h-[500px] py-2' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col space-y-1 px-6 text-gray-800 bg-blue-100">
                  <Link to="/prosthetic-services" className="block">Prosthetic Services</Link>
                  <Link to="/orthotic-services" className="block">Orthotic Services</Link>
                  <Link to="/diabetic-care" className="block">Diabetic Foot & Wound Care</Link>
                  <Link to="/pediatric-care" className="block">Pediatric Care</Link>
                </div>
              </div>
            </div>

            {/* More Dropdown */}
            <div>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="w-full flex justify-between items-center px-4 py-2 bg-blue-500"
              >
                More <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  moreOpen ? 'max-h-[500px] py-2' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col space-y-1 px-6 text-gray-800 bg-blue-100">
                  <Link to="/gallery" className="block">Photo Gallery</Link>
                  <Link to="/facility" className="block">Our Facility</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
