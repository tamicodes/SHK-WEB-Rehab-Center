import { Card, CardContent } from './ui/card';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sirum Fatima',
    review: 'Dr Sajawal is an excellent physiotherapist. He is experienced and truly cares about his patient. His treatment really helped me. I am thankful and highly recommend him.',
    rating: 5,
    date: '2 days ago',
    isGoogleReview: true
  },
  {
    name: 'Maryam Shikrani',
    review: 'I was suffering from ankle pain due to an old injury. Dr. Sajawal Hussain at SHK Rehab Center designed a personalized physiotherapy plan. The swelling reduced and mobility improved significantly.',
    rating: 5,
    date: '2 weeks ago',
    isGoogleReview: true
  },
  {
    name: 'Sawera Saqib',
    review: 'I had persistent neck muscle spasms for weeks. After starting physiotherapy with Dr. Sajawal Hussain at SHK Rehab Center, the treatment really helped me recover.',
    rating: 5,
    date: '1 week ago',
    isGoogleReview: true
  },
  {
    name: 'Bushra Khan',
    review: 'Recommended, best place to get rid of back pain, satisfied with Dr Sajawal Hussain.',
    rating: 5,
    date: 'Yesterday',
    isGoogleReview: true
  },
  {
    name: 'Ahmad Raza',
    review: 'Best physiotherapy services from Dr. Sajawal Hussain at SHK Rehab center.',
    rating: 5,
    date: 'Yesterday',
    isGoogleReview: true
  },
  {
    name: 'Farva Khan',
    review: 'Highly experienced and compassionate physical therapists.',
    rating: 5,
    date: 'Yesterday',
    isGoogleReview: true
  },
  {
    name: 'Malik Abdul Wahab',
    review: 'Very good staff, excellent doctor, and an overall great clinic. Highly recommended.',
    rating: 5,
    date: '6 weeks ago',
    isGoogleReview: true
  },
  {
    name: 'Usman Mumtaz',
    review: 'I brought my father to SHK Rehab Center for severe lower back pain, and we were both extremely impressed with the care provided.',
    rating: 5,
    date: '10 weeks ago',
    isGoogleReview: true
  },
  {
    name: 'Danial Rana',
    review: 'The clinic has a calm and clean environment. The staff is very polite, and the therapist truly understands the root cause before starting treatment. I\'m very satisfied with the progress in my back pain recovery.',
    rating: 5,
    date: '11 weeks ago',
    isGoogleReview: true
  }
];

const cardColors = [
  'from-blue-50 to-cyan-50 border-blue-200',
  'from-purple-50 to-pink-50 border-purple-200',
  'from-green-50 to-emerald-50 border-green-200',
  'from-orange-50 to-red-50 border-orange-200',
  'from-yellow-50 to-amber-50 border-yellow-200',
  'from-indigo-50 to-blue-50 border-indigo-200',
  'from-teal-50 to-cyan-50 border-teal-200',
  'from-rose-50 to-pink-50 border-rose-200',
  'from-violet-50 to-purple-50 border-violet-200'
];

export function Testimonials() {
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !review.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // In a real application, this would send to a backend
    toast.success('Thank you for your review! It will be published after verification.');
    
    // Reset form
    setName('');
    setReview('');
    setRating(5);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50 relative overflow-hidden" id="testimonials">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-teal-100 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-1">500+</h4>
            <p className="text-gray-600 font-medium">Happy Patients</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-100 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4">
              <Award className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">5.0/5</h4>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4">
              <TrendingUp className="text-white" size={28} />
            </div>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">95%</h4>
            <p className="text-gray-600 font-medium">Success Rate</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied patients.
          </p>
        </motion.div>

        {/* Review Submission Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />
            <Card className="relative bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500"></div>
              
              {/* Decorative Corner Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
              
              <CardContent className="p-8 md:p-12 relative">
                <div className="flex items-center justify-center mb-4">
                  <Quote className="text-teal-500 opacity-20 absolute -top-2 -left-2" size={80} />
                  <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-teal-600 via-blue-600 to-orange-500 bg-clip-text text-transparent relative z-10">
                    Share Your Experience
                  </h3>
                </div>
                <p className="text-center text-gray-600 mb-10 text-lg">We'd love to hear from you! ❤️</p>
                
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Star Rating */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200 shadow-inner relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
                    <p className="text-base font-bold text-gray-800 mb-6 relative z-10">✨ Rate Your Experience</p>
                    <div className="flex justify-center gap-4 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          whileHover={{ scale: 1.3, rotate: 15 }}
                          whileTap={{ scale: 0.9 }}
                          className="transition-all duration-200 cursor-pointer"
                        >
                          <Star
                            size={48}
                            className={`transition-all duration-300 ${
                              star <= (hoveredRating || rating)
                                ? 'text-yellow-500 fill-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]'
                                : 'text-gray-300 fill-gray-200'
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                    <motion.div
                      key={rating}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-block px-6 py-3 rounded-full bg-white shadow-lg border-2 border-yellow-300"
                    >
                      <p className="text-lg font-bold" style={{ color: rating >= 4 ? '#197c93' : '#ef5b01' }}>
                        {rating === 5 ? '⭐ Excellent!' : rating === 4 ? '😊 Very Good!' : rating === 3 ? '👍 Good!' : rating === 2 ? '😐 Fair' : '😞 Poor'}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Name Input */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all rounded-xl text-base py-7 shadow-sm hover:shadow-md"
                      required
                    />
                  </div>

                  {/* Review Textarea */}
                  <div className="group">
                    <label htmlFor="review" className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      Your Review
                    </label>
                    <Textarea
                      id="review"
                      placeholder="Tell us about your experience at SHK Rehab Center..."
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="w-full min-h-[160px] border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all rounded-xl text-base shadow-sm hover:shadow-md"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full text-white font-bold py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 hover:from-teal-600 hover:via-blue-600 hover:to-orange-600 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <span>✨</span>
                        Submit Review
                        <Star className="fill-white" size={20} />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundSize: '200% 200%',
                        }}
                      />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Existing Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-orange-500 bg-clip-text text-transparent inline-block mb-4">
            Recent Patient Reviews
          </h3>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 mt-4">Trusted by hundreds of satisfied patients</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className={`hover:shadow-2xl transition-all duration-500 border-2 bg-gradient-to-br ${cardColors[index % cardColors.length]} h-full relative overflow-hidden group`}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-bl-full"></div>
                  <Quote className="absolute top-4 right-4 text-white/40 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                  
                  <CardContent className="p-7 relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                          >
                            <Star className="text-yellow-500 fill-yellow-400 drop-shadow-md" size={22} />
                          </motion.div>
                        ))}
                      </div>
                      {testimonial.isGoogleReview && (
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          className="text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 rounded-full shadow-lg"
                        >
                          Google
                        </motion.span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-5 italic font-medium leading-relaxed text-base">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t-2 border-white/50">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 font-medium mt-1">{testimonial.date}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
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