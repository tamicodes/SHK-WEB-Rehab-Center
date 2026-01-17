import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import { ServicesModal } from './ServicesModal';
import clinicExterior from '@/assets/exterior.png';

export function Hero() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServicesModal isOpen={isServicesModalOpen} onClose={() => setIsServicesModalOpen(false)} />
      
      <section id="home" className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={clinicExterior}
            alt="SHK Physiotherapy Rehab Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-teal-800/90 to-orange-900/85"></div>
          
          {/* Animated overlay patterns */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <p className="text-sm font-semibold flex items-center gap-2">
                  <MapPin size={16} />
                  Bahawalpur, Pakistan
                </p>
              </motion.div>
              
              <h1 className="mb-6 text-white text-5xl md:text-6xl leading-tight">
                <span className="block">SHK Physiotherapy</span>
                <span className="block text-secondary">
                  Rehab Center
                </span>
                <span className="block text-4xl md:text-5xl mt-2">Pain Management Clinic</span>
              </h1>
              
              <p className="mb-8 text-xl text-gray-100 leading-relaxed">
                Expert pain management & physiotherapy services in Bahawalpur. Specializing in dry needling, 
                hijama therapy, sports injuries, and comprehensive rehabilitation programs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={scrollToContact}
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-bold shadow-2xl"
                  >
                    Book Appointment Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={() => setIsServicesModalOpen(true)}
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-6 text-lg font-bold"
                  >
                    View All Services
                  </Button>
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <Users className="text-orange-400 mb-2" size={28} />
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-gray-300">Patients</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <Award className="text-orange-400 mb-2" size={28} />
                  <p className="text-2xl font-bold">5.0/5</p>
                  <p className="text-sm text-gray-300">Rating</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <Clock className="text-orange-400 mb-2" size={28} />
                  <p className="text-2xl font-bold">7 Days</p>
                  <p className="text-sm text-gray-300">Open</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:flex flex-col gap-4"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-orange-400">✨ Specialized Services</h3>
                <ul className="space-y-2 text-gray-100">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Dry Needling for Trigger Points
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Hijama (Dry & Wet Cupping)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Chronic Pain Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    Sports Injury Rehabilitation
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-orange-400">📍 Visit Us</h3>
                <p className="text-gray-100 leading-relaxed">
                  Fauji Basti Chowk, Ehsan Commercial<br />
                  Yazman Road, Bahawalpur Cantt<br />
                  <span className="font-semibold text-white">+92 310 6888901</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}