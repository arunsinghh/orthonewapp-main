import React from 'react';

function PediatricCare() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Pediatric Care</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="images/pediatric.jpeg"
            alt="Pediatric Care"
            className="rounded-lg shadow-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Specialized Pediatric Services</h2>
          <p className="text-gray-600 mb-6">
            Our pediatric care services are specifically designed to address the unique needs of children requiring prosthetic and orthotic care. We create a comfortable, child-friendly environment while delivering expert care.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Pediatric Services:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Pediatric Prosthetics</li>
              <li>Growth-Accommodating Designs</li>
              <li>Scoliosis Management</li>
              <li>Sports Medicine</li>
              <li>Developmental Support</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Conditions We Treat</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Congenital Limb Differences</li>
              <li>Cerebral Palsy</li>
              <li>Spina Bifida</li>
              <li>Developmental Delays</li>
              <li>Sports Injuries</li>
              <li>Scoliosis</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Child-Focused Approach</h3>
            <p className="text-gray-600">
              Our pediatric care features:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
              <li>Child-Friendly Environment</li>
              <li>Age-Appropriate Education</li>
              <li>Family-Centered Care</li>
              <li>Growth Monitoring</li>
              <li>Activity-Based Goals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PediatricCare;