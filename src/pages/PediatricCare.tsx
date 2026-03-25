import { motion } from 'framer-motion';

function PediatricCare() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Pediatric Care
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/pediatric.webp"
            alt="Pediatric Care"
            className="rounded-2xl shadow-2xl mb-8 w-full"
            loading="lazy"
          />
          <h2 className="text-3xl font-semibold text-purple-600 mb-6">Specialized Pediatric Services</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our pediatric care services are specifically designed to address the unique needs of children requiring prosthetic and orthotic care. We create a comfortable, child-friendly environment while delivering expert care.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm border border-purple-100 mb-8">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Our Pediatric Services:</h3>
            <ul className="grid grid-cols-1 gap-3 text-gray-700">
              <li className="flex items-center gap-2">🧸 Pediatric Prosthetics</li>
              <li className="flex items-center gap-2">📏 Growth-Accommodating Designs</li>
              <li className="flex items-center gap-2">🦴 Scoliosis Management</li>
              <li className="flex items-center gap-2">⚽ Sports Medicine</li>
              <li className="flex items-center gap-2">🌱 Developmental Support</li>
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
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Conditions We Treat</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">🩺 Congenital Limb Differences</li>
              <li className="flex items-center gap-2">🩺 Cerebral Palsy</li>
              <li className="flex items-center gap-2">🩺 Spina Bifida</li>
              <li className="flex items-center gap-2">🩺 Developmental Delays</li>
              <li className="flex items-center gap-2">🩺 Sports Injuries</li>
              <li className="flex items-center gap-2">🩺 Scoliosis</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-purple-600 p-8 rounded-2xl shadow-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Child-Focused Approach</h3>
            <ul className="space-y-3">
              <li>🏠 Child-Friendly Environment</li>
              <li>📖 Age-Appropriate Education</li>
              <li>👨‍👩‍👦 Family-Centered Care</li>
              <li>📈 Growth Monitoring</li>
              <li>🎯 Activity-Based Goals</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PediatricCare;