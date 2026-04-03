'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Briefcase, TrendingUp, Check, X, Star, Award, Users, Zap } from 'lucide-react'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    {
      id: 'content-writing',
      icon: BookOpen,
      title: 'Content Writing',
      subtitle: 'Engaging Bengali & English Content',
      price: '৳5,000',
      priceNote: 'per article/blog',
      description: 'Professional content writing services in both Bengali and English. Perfect for blogs, websites, and digital platforms targeting Bangladeshi and international audiences.',
      features: [
        'SEO-optimized Bengali articles',
        'English blog posts and web content',
        'Cultural sensitivity for Bangladeshi market',
        'Research-backed writing',
        'Unlimited revisions',
        'Fast 3-5 day turnaround'
      ],
      highlights: [
        '500+ articles written',
        'Published in Jugantor & Protidiner Bangladesh',
        'Expert in Bengali humor & satire'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'copywriting',
      icon: Briefcase,
      title: 'Copywriting',
      subtitle: 'Persuasive Sales Copy That Converts',
      price: '৳8,000',
      priceNote: 'per project',
      description: 'High-converting copywriting for Bangladeshi businesses. Sales pages, landing pages, email campaigns, and ad copy that speaks to your audience and drives action.',
      features: [
        'Sales page copywriting',
        'Email marketing campaigns',
        'Facebook & Google ad copy',
        'Product descriptions',
        'Landing page optimization',
        'A/B testing suggestions'
      ],
      highlights: [
        'Proven conversion strategies',
        'Understanding of Bangladeshi buyer psychology',
        'Both Bengali & English expertise'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'facebook-marketing',
      icon: TrendingUp,
      title: 'Facebook Marketing',
      subtitle: 'Strategic Social Media Growth',
      price: '৳15,000',
      priceNote: 'per month',
      description: 'Complete Facebook marketing services for Bangladeshi businesses. Content strategy, post creation, ad campaigns, and community management to grow your brand.',
      features: [
        'Content calendar planning',
        'Daily post creation (Bengali/English)',
        'Facebook ad campaign management',
        'Audience targeting & analytics',
        'Community engagement',
        'Monthly performance reports'
      ],
      highlights: [
        'Specialized in BD market',
        'Creative storytelling approach',
        'Data-driven strategy'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          service_type: '',
          message: ''
        })
        setTimeout(() => {
          setShowModal(false)
          setSubmitStatus(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openModal = (service) => {
    setSelectedService(service)
    setFormData({
      ...formData,
      service_type: service.title
    })
    setShowModal(true)
  }

  return (
    <>
      {/* SEO-Optimized Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-primary via-gray-900 to-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional Writing & Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
              Expert Bengali & English content writing, persuasive copywriting, and Facebook marketing for Bangladeshi businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Published author with proven expertise in humor, satire, and engaging storytelling. Featured in Jugantor, Protidiner Bangladesh, and Earki.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { icon: Award, text: 'Published Author' },
              { icon: Star, text: '4.56★ Rating' },
              { icon: Users, text: '5K+ Readers' },
              { icon: Zap, text: 'Fast Delivery' }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon size={24} className="text-accent" />
                <span className="text-gray-300">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Choose Your Service
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Professional writing services tailored for the Bangladeshi market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative"
              >
                {/* Animated gradient border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white relative overflow-hidden`}>
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <service.icon size={48} className="mb-4 relative z-10" />
                    <h3 className="text-3xl font-bold mb-2 relative z-10">{service.title}</h3>
                    <p className="text-white/90 relative z-10">{service.subtitle}</p>
                  </div>

                  {/* Pricing */}
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-primary mb-2">{service.price}</div>
                      <div className="text-gray-500">{service.priceNote}</div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 mb-2 last:mb-0">
                          <Star size={16} className="text-yellow-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openModal(service)}
                      className={`w-full py-4 rounded-full font-bold text-lg bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      Request This Service
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Work With Me?
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Proven expertise in Bengali literature and digital marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Published Author',
                description: 'Author of "Hawai Mithai" and "Paap Ebong Punno" - proven storytelling expertise',
                icon: '📚'
              },
              {
                title: 'Featured Writer',
                description: 'Published in Jugantor, Protidiner Bangladesh, and Earki',
                icon: '📰'
              },
              {
                title: 'Bilingual Expert',
                description: 'Native Bengali speaker with excellent English writing skills',
                icon: '🌏'
              },
              {
                title: 'Fast Turnaround',
                description: 'Quick delivery without compromising on quality',
                icon: '⚡'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedService?.color} p-8 text-white relative overflow-hidden`}>
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <X size={24} />
                </button>
                <selectedService.icon size={48} className="mb-4 relative z-10" />
                <h2 className="text-3xl font-bold mb-2 relative z-10">Request {selectedService?.title}</h2>
                <p className="text-white/90 relative z-10">Fill out the form below and I'll get back to you within 24 hours</p>
              </div>

              {/* Modal Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Content Writing">Content Writing - ৳5,000</option>
                    <option value="Copywriting">Copywriting - ৳8,000</option>
                    <option value="Facebook Marketing">Facebook Marketing - ৳15,000/month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3"
                  >
                    <Check size={24} className="text-green-500" />
                    <span className="text-green-700 font-semibold">Request submitted successfully! I'll contact you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-500 rounded-xl p-4 flex items-center gap-3"
                  >
                    <X size={24} className="text-red-500" />
                    <span className="text-red-700 font-semibold">Failed to submit request. Please try again.</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-full font-bold text-lg bg-gradient-to-r ${selectedService?.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Submit Request
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}