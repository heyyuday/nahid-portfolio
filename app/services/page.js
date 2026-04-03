'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ServiceCard from '../../components/ServiceCard'
import { Pen, Megaphone, TrendingUp, Send, CheckCircle, AlertCircle, X } from 'lucide-react'

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_type: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const services = [
    {
      title: 'Content Writing',
      icon: Pen,
      description: 'High-quality, engaging content that resonates with your audience and drives results. From blog posts to website copy, I create content that tells your story.',
      features: [
        'Blog posts and articles',
        'Website content and landing pages',
        'SEO-optimized writing',
        'Research-backed content',
        'Unlimited revisions'
      ],
      pricing: 'Starting at ৳5,000',
      pricingNote: 'Per 1000 words'
    },
    {
      title: 'Copywriting',
      icon: Megaphone,
      description: 'Persuasive copy that converts readers into customers. I craft compelling messages that drive action and boost your business.',
      features: [
        'Sales pages and landing pages',
        'Email marketing campaigns',
        'Product descriptions',
        'Ad copy (Google, Facebook)',
        'Brand messaging and taglines'
      ],
      pricing: 'Starting at ৳8,000',
      pricingNote: 'Per project'
    },
    {
      title: 'Facebook Marketing',
      icon: TrendingUp,
      description: 'Strategic Facebook marketing campaigns that grow your audience and increase engagement. Data-driven approach for measurable results.',
      features: [
        'Campaign strategy and planning',
        'Content creation and scheduling',
        'Audience targeting and analysis',
        'Ad management and optimization',
        'Monthly performance reports'
      ],
      pricing: 'Starting at ৳15,000',
      pricingNote: 'Per month'
    }
  ]

  const handleRequestService = (serviceName) => {
    setSelectedService(serviceName)
    setFormData({ ...formData, service_type: serviceName })
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Your request has been submitted! I\'ll get back to you within 24 hours.')
        setFormData({ name: '', email: '', service_type: '', message: '' })
        setTimeout(() => {
          setIsModalOpen(false)
          setStatus('idle')
          setMessage('')
        }, 3000)
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Professional Services
            </h1>
            <p className="text-2xl text-secondary leading-relaxed">
              Transform your ideas into compelling content that engages, inspires, and converts. 
              Let's bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                onRequestService={handleRequestService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Work With Me?
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Proven expertise delivering results for clients across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '10+ Years', description: 'Professional experience' },
              { title: '200+', description: 'Projects completed' },
              { title: '98%', description: 'Client satisfaction' },
              { title: '24/7', description: 'Support available' }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl font-bold text-accent mb-2">{stat.title}</div>
                <div className="text-secondary">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Simple, transparent process from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Consult', description: 'We discuss your needs and goals' },
              { step: '02', title: 'Proposal', description: 'Receive a detailed project proposal' },
              { step: '03', title: 'Create', description: 'I craft content tailored to you' },
              { step: '04', title: 'Deliver', description: 'Receive polished, ready-to-use content' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-primary">Request Service</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-secondary hover:text-primary transition-colors"
              >
                <X size={28} />
              </button>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <p className="text-xl text-green-600">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent outline-none text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent outline-none text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Service Type *
                  </label>
                  <select
                    required
                    value={formData.service_type}
                    onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent outline-none text-lg"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Project Details *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent outline-none text-lg resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <span>{message}</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                  <Send size={20} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </>
  )
}
