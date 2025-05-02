import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            OrthoproIndia
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group inline-block">
              <button
                className="flex items-center space-x-1 px-4 py-2 hover:bg-blue-700 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute z-50 hidden group-hover:block w-64 bg-white text-gray-800 shadow-lg rounded-md mt-1">
                <Link
                  to="/prosthetic-services"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Prosthetic Services
                </Link>
                <Link
                  to="/orthotic-services"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Orthotic Services
                </Link>
                <Link
                  to="/diabetic-care"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Diabetic Foot & Wound Care
                </Link>
                <Link
                  to="/pediatric-care"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Pediatric Care
                </Link>
              </div>
            </div>

            <div className="relative group inline-block">
              <button
                className="flex items-center space-x-1 px-4 py-2 hover:bg-blue-700 rounded-md"
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute z-50 hidden group-hover:block w-48 bg-white text-gray-800 shadow-lg rounded-md mt-1">
                <Link
                  to="/gallery"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Photo Gallery
                </Link>
                <Link
                  to="/facility"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Facility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;