import React from 'react';

function OrthoticServices() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Orthotic Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="images/orthotics.jpeg"
            alt="Orthotic Fitting"
            className="rounded-lg shadow-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Comprehensive Orthotic Care</h2>
          <p className="text-gray-600 mb-6">
            Our orthotic services provide custom-designed external supports to improve function, reduce pain, and enhance mobility. We offer a wide range of orthotic solutions for various conditions and body parts.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Types of Orthotic Devices:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Ankle-Foot Orthoses (AFO)</li>
              <li>Knee Orthoses (KO)</li>
              <li>Spinal Orthoses</li>
              <li>Upper Extremity Orthoses</li>
              <li>Custom Foot Orthotics</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Conditions We Treat</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Foot and Ankle Disorders</li>
              <li>Knee Instability</li>
              <li>Spinal Conditions</li>
              <li>Sports Injuries</li>
              <li>Neurological Conditions</li>
              <li>Post-operative Support</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Comprehensive Evaluation</li>
              <li>Biomechanical Assessment</li>
              <li>Custom Measurements</li>
              <li>Device Fabrication</li>
              <li>Fitting and Adjustments</li>
              <li>Follow-up Care</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrthoticServices;