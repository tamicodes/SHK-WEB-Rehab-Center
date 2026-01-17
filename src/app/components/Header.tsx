import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import logo from '@/assets/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with Contact Info */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="font-medium">+92 310 6888901</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="font-medium">sajawal.langah@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={logo}
              alt="SHK Physiotherapy Rehab Center"
              className="h-14 w-14"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                SHK Physiotherapy Rehab Center
              </h1>
              <p className="text-sm text-gray-600 font-medium">Pain Management Clinic - Bahawalpur</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-semibold">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-semibold">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors font-semibold">
              About
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-primary transition-colors font-semibold">
              Founder
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors font-semibold">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-semibold">
              Contact
            </button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 shadow-lg"
              >
                Book Appointment
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 flex flex-col gap-4 overflow-hidden"
            >
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors text-left font-semibold py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors text-left font-semibold py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors text-left font-semibold py-2">
                About
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-primary transition-colors text-left font-semibold py-2">
                Founder
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-primary transition-colors text-left font-semibold py-2">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors text-left font-semibold py-2">
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-white font-bold w-full"
              >
                Book Appointment
              </Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}