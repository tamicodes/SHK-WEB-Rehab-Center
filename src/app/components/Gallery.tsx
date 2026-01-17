import { motion } from 'motion/react';
import clinicExterior from '@/assets/exterior.png';
import clinicReception from '@/assets/reception.png';
import clinicTreatment from '@/assets/treatment.png';
import clinicInterior from '@/assets/interior.png';

const galleryImages = [
  {
    src: clinicExterior,
    alt: 'SHK Rehab Center Exterior',
    caption: 'Our Modern Clinic Facility'
  },
  {
    src: clinicReception,
    alt: 'Reception Area',
    caption: 'Welcoming Reception & Waiting Area'
  },
  {
    src: clinicInterior,
    alt: 'Treatment Room',
    caption: 'Professional Treatment & Consultation Room'
  },
  {
    src: clinicTreatment,
    alt: 'Treatment Area',
    caption: 'State-of-the-Art Rehabilitation Area'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
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
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">Our Facility</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take a look at our modern, well-equipped clinic designed to provide the best care and comfort for our patients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-teal-200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-900/90 via-teal-800/70 to-transparent p-4">
                <p className="text-white font-semibold">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}