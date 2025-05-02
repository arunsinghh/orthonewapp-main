import React from 'react';

function Facility() {
  const facilities = [
    {
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1920',
      title: 'Modern Fitting Room',
      description: 'State-of-the-art fitting room equipped with the latest technology for precise measurements and adjustments.'
    },
    {
      image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=1920',
      title: 'Clinical Assessment Area',
      description: 'Dedicated space for comprehensive clinical assessments and consultations.'
    },
    {
      image: 'https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=1920',
      title: 'Fabrication Laboratory',
      description: 'Advanced fabrication lab where custom prosthetic and orthotic devices are created.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Facility</h1>
      
      <div className="space-y-12">
        {facilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{facility.title}</h2>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">State-of-the-Art Equipment</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>3D Scanning Technology</li>
            <li>Computer-Aided Design (CAD) Workstations</li>
            <li>Advanced Manufacturing Equipment</li>
            <li>Gait Analysis System</li>
            <li>Pressure Mapping Technology</li>
            <li>Rehabilitation Training Area</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Facility;