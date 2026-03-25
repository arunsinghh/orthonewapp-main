import { motion } from 'framer-motion';

function OrthoticServices() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Orthotic Services
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/orthotics.webp"
            alt="Orthotic Fitting"
            className="rounded-2xl shadow-2xl mb-8 w-full"
            loading="lazy"
          />
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Comprehensive Orthotic Care</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our orthotic services provide custom-designed external supports to improve function, reduce pain, and enhance mobility. We offer a wide range of orthotic solutions for various conditions and body parts.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-blue-100 mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Types of Orthotic Devices:</h3>
            <ul className="grid grid-cols-1 gap-3 text-gray-700">
              <li className="flex items-center gap-2">🔹 Ankle-Foot Orthoses (AFO)</li>
              <li className="flex items-center gap-2">🔹 Knee Orthoses (KO)</li>
              <li className="flex items-center gap-2">🔹 Spinal Orthoses</li>
              <li className="flex items-center gap-2">🔹 Upper Extremity Orthoses</li>
              <li className="flex items-center gap-2">🔹 Custom Foot Orthotics</li>
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
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Conditions We Treat</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">🩺 Foot and Ankle Disorders</li>
              <li className="flex items-center gap-2">🩺 Knee Instability</li>
              <li className="flex items-center gap-2">🩺 Spinal Conditions</li>
              <li className="flex items-center gap-2">🩺 Sports Injuries</li>
              <li className="flex items-center gap-2">🩺 Neurological Conditions</li>
              <li className="flex items-center gap-2">🩺 Post-operative Support</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Process</h3>
            <div className="space-y-4">
              {[
                "Comprehensive Evaluation",
                "Biomechanical Assessment",
                "Custom Measurements",
                "Device Fabrication",
                "Fitting and Adjustments",
                "Follow-up Care"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold text-sm">{i+1}</span>
                  <span className="font-medium">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OrthoticServices;