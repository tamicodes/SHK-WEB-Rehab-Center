import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Activity, Heart, Bone, User, Zap, Shield, Target, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Zap,
    title: 'Chronic Pain Management',
    description: 'Advanced techniques and therapies to manage and reduce chronic pain for improved quality of life.',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Target,
    title: 'Dry Needling',
    description: 'Effective trigger point therapy for muscle pain relief and chronic pain management using precise needling techniques.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    icon: Droplets,
    title: 'Hijama (Cupping Therapy)',
    description: 'Traditional cupping therapy including dry cupping and wet cupping for detoxification, pain relief, and improved circulation.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Activity,
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized treatment programs for athletes to recover from injuries and enhance performance.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Bone,
    title: 'Post-Surgical Rehabilitation',
    description: 'Comprehensive recovery programs following orthopedic and other surgical procedures.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: User,
    title: 'Manual Therapy',
    description: 'Expert hands-on techniques to relieve pain, improve mobility, and restore function.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Heart,
    title: 'Physical Therapy',
    description: 'Personalized exercise and treatment plans for various musculoskeletal conditions.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Customized programs to prevent injuries and maintain optimal physical health.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
];

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
            Our Comprehensive Services
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-gray-600 mt-2">
            Professional physiotherapy and pain management services tailored to your needs
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${service.bgColor} rounded-xl p-6 border-2 border-transparent hover:border-primary transition-all hover:shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 border-2 ${service.color.replace('text-', 'border-')}`}>
                    <Icon className={service.color} size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${service.color}`}>{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl border-2 border-teal-200">
          <h4 className="text-xl font-bold text-center mb-3 text-primary">Ready to Start Your Recovery Journey?</h4>
          <p className="text-center text-gray-700 mb-4">
            Book your appointment today at SHK Physiotherapy Rehab Center, Bahawalpur
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+923106888901" 
              className="px-6 py-3 bg-secondary text-white rounded-lg font-bold text-center hover:bg-secondary/90 transition-colors"
            >
              Call: +92 310 6888901
            </a>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
