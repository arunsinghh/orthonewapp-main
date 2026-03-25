import { motion } from 'framer-motion';

function ProstheticServices() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Prosthetic Services
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="images/prosthetic.webp"
            alt="Prosthetic Fitting"
            className="rounded-2xl shadow-2xl mb-8 w-100"
            loading="lazy"
          />
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Custom Prosthetic Solutions</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our prosthetic services utilize the latest advancements in technology to create custom-fitted artificial limbs that provide optimal comfort and functionality. We work closely with each patient to understand their unique needs and lifestyle requirements.
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Our Specializations:</h3>
            <ul className="grid grid-cols-1 gap-3 text-gray-700">
              <li className="flex items-center gap-2">🔹 Upper Extremity Prosthetics</li>
              <li className="flex items-center gap-2">🔹 Lower Extremity Prosthetics</li>
              <li className="flex items-center gap-2">🔹 Microprocessor Controlled Joints</li>
              <li className="flex items-center gap-2">🔹 Sports-Specific Prosthetics</li>
              <li className="flex items-center gap-2">🔹 Custom Silicone Prosthetics</li>
            </ul>
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Assessment Process</h3>
            <p className="text-gray-600 mb-6">
              Our comprehensive assessment process ensures that each prosthetic solution is perfectly tailored to your needs:
            </p>
            <div className="space-y-4">
              {[
                "Initial Consultation",
                "Detailed Measurements",
                "3D Scanning",
                "Custom Design",
                "Fitting and Adjustments",
                "Follow-up Care"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{i+1}</span>
                  <span className="text-gray-700 font-medium">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Advanced Technology</h3>
            <p className="mb-6 opacity-90">
              We utilize state-of-the-art technology to ensure precision:
            </p>
            <ul className="space-y-3">
              <li>🚀 3D Printing for Custom Components</li>
              <li>💻 Computer-Aided Design (CAD)</li>
              <li>⚙️ Dynamic Alignment Systems</li>
              <li>🔍 Pressure Mapping Technology</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProstheticServices;