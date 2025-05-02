import React, { useState, useEffect } from 'react';
import { Mail,ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/slide_a.jpg',
  '/images/slide_b.jpeg',
  '/images/slide_c.jpeg',
  '/images/slide_d.jpg',
  '/images/slide_e.jpg'
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Slideshow */}
      <div className="relative h-[500px] overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">Prosthetic Services</h3>
                <p className="mt-2 text-gray-600">
                  Custom-designed artificial limbs using cutting-edge technology and materials
                  for optimal comfort and functionality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">Orthotic Services</h3>
                <p className="mt-2 text-gray-600">
                  Specialized braces and supports designed to improve mobility and provide
                  stability for various medical conditions.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 w-5 h-5" />
                <p>info@orthoproindia.com</p>
              </div>

            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; OrthoProIndia. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;