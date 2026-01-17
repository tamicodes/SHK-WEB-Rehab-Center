import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-white">SHK Physiotherapy Rehab Center</h3>
            <p className="text-gray-200 mb-4">
              Bahawalpur's premier pain management and physiotherapy clinic. 
              Dedicated to providing exceptional rehabilitation services and helping you achieve optimal health.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/LearnWithSHK/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/shkrehabcenter/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/3008680705" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-secondary transition-colors">Founder</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#services" className="hover:text-secondary transition-colors">Pain Management</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Dry Needling</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Hijama Therapy</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Sports Injuries</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-200">
          <p>&copy; 2025 SHK Physiotherapy Rehab Center - Pain Management Clinic, Bahawalpur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}