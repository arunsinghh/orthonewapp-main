import { motion } from 'framer-motion';

function DiabeticCare() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Diabetic Foot &amp; Wound Care
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/diabetic.webp"
            alt="Diabetic Foot Care"
            className="rounded-2xl shadow-2xl mb-8 w-full"
            loading="lazy"
          />
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Specialized Diabetic Care</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our comprehensive diabetic foot care program focuses on prevention, treatment, and management of diabetes-related foot conditions. We provide specialized care to reduce the risk of complications and maintain foot health.
          </p>
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-sm border border-green-100 mb-8">
            <h3 className="text-xl font-bold text-green-800 mb-4">Our Services Include:</h3>
            <ul className="grid grid-cols-1 gap-3 text-gray-700">
              <li className="flex items-center gap-2">🩺 Diabetic Foot Assessment</li>
              <li className="flex items-center gap-2">👟 Custom Diabetic Footwear</li>
              <li className="flex items-center gap-2">🩹 Wound Care Management</li>
              <li className="flex items-center gap-2">📚 Preventive Care Education</li>
              <li className="flex items-center gap-2">📋 Regular Monitoring</li>
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
            <h3 className="text-2xl font-bold text-green-700 mb-4">Prevention &amp; Treatment</h3>
            <p className="text-gray-600 mb-6">Our comprehensive approach includes:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ Regular Foot Screenings</li>
              <li className="flex items-center gap-2">✅ Circulation Assessment</li>
              <li className="flex items-center gap-2">✅ Neurological Testing</li>
              <li className="flex items-center gap-2">✅ Wound Treatment</li>
              <li className="flex items-center gap-2">✅ Pressure Relief Strategies</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-green-600 p-8 rounded-2xl shadow-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
            <ul className="space-y-3">
              <li>👟 Therapeutic Footwear</li>
              <li>🦶 Custom Orthotics</li>
              <li>💡 Pressure-Relief Insoles</li>
              <li>🩹 Advanced Wound Dressings</li>
              <li>⚙️ Offloading Devices</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default DiabeticCare;