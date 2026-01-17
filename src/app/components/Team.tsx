import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Award, Star, GraduationCap, MapPin } from 'lucide-react';
import drSajawalImage from '@/assets/doctor.png';


const teamMembers = [
  {
    name: 'Dr. Sajawal Hussain Khan',
    role: 'CEO & Lead Physiotherapist',
    credentials: 'DPT - Bahawalpur Medical & Dental College',
    image: drSajawalImage,
    bio: 'Founder of SHK Physiotherapy Rehab Center with extensive expertise in pain management, sports injuries, dry needling, hijama therapy, and comprehensive physiotherapy rehabilitation.',
    isCEO: true,
    location: 'Bahawalpur, Pakistan'
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 bg-teal-200 rounded-full opacity-10 blur-3xl"
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
      <motion.div
        className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading expert in physiotherapy and pain management, dedicated to providing exceptional care.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-md w-full"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-teal-400 shadow-xl relative">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500"></div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Award className="text-white" size={36} />
                  </div>
                  
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Star className="fill-white" size={16} />
                      CEO & Founder
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-teal-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <GraduationCap size={18} />
                      DPT Graduate
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl mb-2">{member.name}</h3>
                    <p className="mb-2 font-bold text-lg bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
                      {member.role}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <GraduationCap size={16} className="text-teal-600" />
                      <p className="font-medium">{member.credentials}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <MapPin size={16} className="text-orange-600" />
                      <p className="font-medium">{member.location}</p>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}