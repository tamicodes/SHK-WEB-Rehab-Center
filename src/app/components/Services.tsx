import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Activity, Heart, Bone, User, Zap, Shield, Target, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Zap,
    title: 'Chronic Pain Management',
    description: 'Advanced techniques and therapies to manage and reduce chronic pain for improved quality of life.',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Dry Needling',
    description: 'Effective trigger point therapy for muscle pain relief and chronic pain management using precise needling techniques.',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Droplets,
    title: 'Hijama (Cupping Therapy)',
    description: 'Traditional cupping therapy including dry cupping and wet cupping for detoxification, pain relief, and improved circulation.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Activity,
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized treatment programs for athletes to recover from injuries and enhance performance.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Bone,
    title: 'Post-Surgical Rehabilitation',
    description: 'Comprehensive recovery programs following orthopedic and other surgical procedures.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: User,
    title: 'Manual Therapy',
    description: 'Expert hands-on techniques to relieve pain, improve mobility, and restore function.',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Heart,
    title: 'Physical Therapy',
    description: 'Personalized exercise and treatment plans for various musculoskeletal conditions.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Customized programs to prevent injuries and maintain optimal physical health.',
    gradient: 'from-indigo-500 to-purple-500'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 9,
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
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive physiotherapy services designed to help you recover, strengthen, and thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200 h-full bg-white/80 backdrop-blur-sm group">
                    <CardHeader>
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-white" size={32} />
                      </motion.div>
                      <CardTitle className="text-lg group-hover:text-teal-600 transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}