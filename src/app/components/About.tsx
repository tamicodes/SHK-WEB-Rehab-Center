import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import clinicReception from '@/assets/reception.png';

const features = [
  'State-of-the-art rehabilitation equipment',
  'Experienced DPT certified physiotherapists',
  'Personalized treatment plans for every patient',
  'Comprehensive pain management solutions',
  'Dry needling for trigger points & chronic pain',
  'Hijama therapy (dry & wet cupping)',
  'Post-surgical rehabilitation programs',
  'Sports injury rehabilitation & prevention'
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-teal-50/30 to-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
              About SHK Physiotherapy Rehab Center
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              <span className="font-bold text-teal-600">SHK Physiotherapy Rehab Center</span> is Bahawalpur's premier pain management and physiotherapy clinic, 
              dedicated to providing exceptional rehabilitation services. Located at Fauji Basti Chowk on Yazman Road, 
              we specialize in treating chronic pain, sports injuries, and post-surgical recovery with evidence-based treatments.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our state-of-the-art facility combines modern equipment with experienced DPT-certified professionals who are committed 
              to helping you achieve your recovery goals. We take pride in offering personalized treatment plans tailored 
              to each patient's unique needs, including specialized services like dry needling and hijama therapy.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle className="text-orange-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={22} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-100">
              <img
                src={clinicReception}
                alt="SHK Physiotherapy Rehab Center Interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl hidden lg:block"
            >
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">4.9★</div>
                <div className="font-semibold">Google Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}