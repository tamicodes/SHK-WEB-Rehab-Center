import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock, MapIcon } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    toast.success('Thank you! We will contact you soon to confirm your appointment.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-teal-200 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
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
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey to better health? Contact us today to book an appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-2 border-teal-100">
              <CardHeader>
                <CardTitle className="text-2xl">Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="mt-2 border-2 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-semibold">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="mt-2 border-2 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+92 310 6888901"
                      className="mt-2 border-2 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your condition or what you need help with..."
                      rows={5}
                      className="mt-2 border-2 focus:border-teal-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-teal-600 to-orange-600 hover:from-teal-700 hover:to-orange-700 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="shadow-xl border-2 border-teal-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-lg">Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Fauji Basti Chowk, Ehsan Commercial Center<br />
                      Yazman Road, near SUFI The Taste Restaurant<br />
                      Bahawalpur Cantt, Bahawalpur, 63100<br />
                      <span className="font-semibold text-teal-600">Punjab, Pakistan</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-lg">Phone</h3>
                    <p className="text-gray-700 font-semibold text-lg">+92 310 6888901</p>
                    <p className="text-sm text-gray-500 mt-1">Pakistan Mobile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-lg">Email</h3>
                    <p className="text-gray-700 break-all">sajawal.langah@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-lg">Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p className="font-semibold">Monday - Sunday</p>
                      <p>Open Daily</p>
                      <p className="text-teal-600 font-semibold">Closes at 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Card */}
            <Card className="shadow-xl border-2 border-teal-100 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-teal-600 to-orange-600 p-4 flex items-center gap-3">
                  <MapIcon className="text-white" size={24} />
                  <h3 className="font-bold text-white text-lg">Find Us on Map</h3>
                </div>
                <div className="w-full h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.123456789!2d71.6810935!3d29.3957487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b94a8f8f8f8f8%3A0x1234567890abcdef!2sSHK%20Physiotherapy%20Rehab%20Center!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SHK Physiotherapy Rehab Center Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}