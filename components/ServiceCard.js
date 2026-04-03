'use client'

import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index, onRequestService }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
          <service.icon size={32} className="text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
      </div>

      <div className="mb-6">
        <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Features</div>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="text-3xl font-bold text-gray-900">{service.pricing}</div>
        <div className="text-sm text-gray-600">{service.pricingNote}</div>
      </div>

      <button
        onClick={() => onRequestService(service.title)}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all"
      >
        Request Service
        <ArrowRight size={20} />
      </button>
    </div>
  )
}