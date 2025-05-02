import React from 'react';

function ProstheticServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Prosthetic Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="images/prosthetic.png"
            alt="Prosthetic Fitting"
            className="rounded-lg shadow-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Custom Prosthetic Solutions</h2>
          <p className="text-gray-600 mb-6">
            Our prosthetic services utilize the latest advancements in technology to create custom-fitted artificial limbs that provide optimal comfort and functionality. We work closely with each patient to understand their unique needs and lifestyle requirements.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Prosthetic Services Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Upper Extremity Prosthetics</li>
              <li>Lower Extremity Prosthetics</li>
              <li>Microprocessor Controlled Joints</li>
              <li>Sports-Specific Prosthetics</li>
              <li>Custom Silicone Prosthetics</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Assessment Process</h3>
            <p className="text-gray-600">
              Our comprehensive assessment process ensures that each prosthetic solution is perfectly tailored to your needs:
            </p>
            <ol className="list-decimal list-inside mt-3 space-y-2 text-gray-600">
              <li>Initial Consultation</li>
              <li>Detailed Measurements</li>
              <li>3D Scanning</li>
              <li>Custom Design</li>
              <li>Fitting and Adjustments</li>
              <li>Follow-up Care</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Advanced Technology</h3>
            <p className="text-gray-600">
              We utilize state-of-the-art technology including:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
              <li>3D Printing for Custom Components</li>
              <li>Computer-Aided Design (CAD)</li>
              <li>Dynamic Alignment Systems</li>
              <li>Pressure Mapping Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProstheticServices;