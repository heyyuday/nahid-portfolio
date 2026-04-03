'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Zap, BookOpen, CheckCircle, X, Send, Star, TrendingUp, Users } from 'lucide-react'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Facebook Marketing',
      subtitle: 'Social Media Growth',
      price: '৳15,000',
      period: '/month',
      description: 'Strategic Facebook marketing campaigns designed specifically for the Bangladeshi market. Drive real engagement, build your brand, and convert followers into customers.',
      features: [
        'Content Strategy & Planning',
        'Facebook Ad Campaign Management',
        'Audience Research & Targeting',
        'Creative Ad Design & Copywriting',
        'A/B Testing & Optimization',
        'Monthly Analytics Reports',
        'Community Management',
        'Competitor Analysis'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      includes: 'Includes 20 posts per month + 2 ad campaigns',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Professional Copywriting',
      subtitle: 'Persuasive Content',
      price: '৳8,000',
      period: '/project',
      description: 'Compelling copy in Bengali and English that speaks directly to your audience and drives action. From sales pages to email campaigns, get copy that converts.',
      features: [
        'Sales Page Copywriting',
        'Email Marketing Campaigns',
        'Facebook & Google Ad Copy',
        'Landing Page Content',
        'Product Descriptions',
        'Call-to-Action Optimization',
        'Brand Voice Development',
        '2 Rounds of Revisions'
      ],
      gradient: 'from-purple-500 to-pink-500',
      includes: 'Up to 2000 words per project',
    },
    {
      id: 3,
      title: 'Content Writing',
      subtitle: 'SEO-Optimized Articles',
      price: '৳5,000',
      period: '/article',
      description: 'High-quality, SEO-optimized content in Bengali and English that ranks on Google and engages your readers. Perfect for blogs, websites, and social media.',
      features: [
        'Blog Posts & Articles',
        'SEO Keyword Research',
        'Website Content Pages',
        'Social Media Content',
        'Bengali & English Writing',
        'Plagiarism-Free Guarantee',
        'Meta Descriptions Included',
        '1 Revision Round'
      ],
      gradient: 'from-orange-500 to-red-500',
      includes: '1000-1500 words per article',
    }
  ]

  const testimonials = [
    { name: 'Ahmed K.', role: 'E-commerce Owner', text: 'Facebook campaigns brought 300% more sales!', rating: 5 },
    { name: 'Fatima R.', role: 'Startup Founder', text: 'Best copywriter in Bangladesh, hands down.', rating: 5 },
    { name: 'Rafiq M.', role: 'Marketing Manager', text: 'SEO content ranks on first page of Google!', rating: 5 },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', service: '', message: '' })
        setTimeout(() => {
          setShowModal(false)
          setSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (service) => {
    setSelectedService(service)
    setFormData({ ...formData, service: service.title })
    setShowModal(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gray-900 text-white rounded-full text-sm font-medium"
            >
              <Star size={16} />
              <span>Trusted by 100+ Bangladeshi Businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Professional Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed mb-8"
            >
              Expert Facebook marketing, copywriting, and content writing services for Bangladeshi businesses. Get results that matter.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { icon: TrendingUp, value: '300%', label: 'Avg. Growth' },
                { icon: Users, value: '100+', label: 'Happy Clients' },
                { icon: Star, value: '5.0', label: 'Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-gray-50 rounded-xl mb-2">
                    <stat.icon size={24} className="text-gray-900" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-gray-900 transition-all"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6`}>
                  <service.icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-gray-500">{service.period}</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-900">Includes:</strong> {service.includes}
                  </p>
                </div>

                <button
                  onClick={() => openModal(service)}
                  className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Request This Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-500">
              Real results from real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Request Service</h3>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {success ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h4>
                  <p className="text-gray-600">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors"
                  />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors"
                  >
                    <option value="">Select Service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                  <textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? 'Sending...' : (
                      <>
                        <Send size={20} />
                        Send Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}