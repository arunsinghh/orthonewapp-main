import React from 'react';

function DiabeticCare() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Diabetic Foot & Wound Care</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="images/diabetic.jpeg"
            alt="Diabetic Foot Care"
            className="rounded-lg shadow-md mb-6"
          />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Specialized Diabetic Care</h2>
          <p className="text-gray-600 mb-6">
            Our comprehensive diabetic foot care program focuses on prevention, treatment, and management of diabetes-related foot conditions. We provide specialized care to reduce the risk of complications and maintain foot health.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Services Include:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Diabetic Foot Assessment</li>
              <li>Custom Diabetic Footwear</li>
              <li>Wound Care Management</li>
              <li>Preventive Care Education</li>
              <li>Regular Monitoring</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Prevention & Treatment</h3>
            <p className="text-gray-600">
              Our comprehensive approach includes:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-600">
              <li>Regular Foot Screenings</li>
              <li>Circulation Assessment</li>
              <li>Neurological Testing</li>
              <li>Wound Treatment</li>
              <li>Pressure Relief Strategies</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Custom Solutions</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Therapeutic Footwear</li>
              <li>Custom Orthotics</li>
              <li>Pressure-Relief Insoles</li>
              <li>Advanced Wound Dressings</li>
              <li>Offloading Devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiabeticCare;