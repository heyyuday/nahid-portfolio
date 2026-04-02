'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index, onRequestService }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-8 hover:shadow-2xl group"
    >
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
          <service.icon size={32} className="text-accent group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
        <p className="text-secondary leading-relaxed mb-6">{service.description}</p>
      </div>

      <div className="mb-6">
        <div className="text-sm text-secondary uppercase tracking-wider mb-2">Features</div>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span className="text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="text-3xl font-bold text-primary">{service.pricing}</div>
        <div className="text-sm text-secondary">{service.pricingNote}</div>
      </div>

      <motion.button
        onClick={() => onRequestService(service.title)}
        whileHover={{ scale: 1.02, x: 5 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-full font-medium hover:bg-accent transition-all duration-300 group"
      >
        Request Service
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  )
}
