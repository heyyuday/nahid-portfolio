'use client'

import Link from 'next/link'
import { Mail, MapPin, Facebook, Instagram, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Books', href: '/books' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ]

  const services = [
    { name: 'Facebook Marketing', href: '/services' },
    { name: 'Copywriting', href: '/services' },
    { name: 'Content Writing', href: '/services' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nahid Ashraf Uday</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Published Bengali author, professional copywriter, and Facebook marketing expert helping businesses grow.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/nahidashrafuday"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all group"
                aria-label="Facebook Profile"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/nahidashrafuday"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all group"
                aria-label="Instagram Profile"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{service.name}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-0.5 text-gray-400" />
                <a
                  href="mailto:nahidashrafuday@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  nahidashrafuday@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-0.5 text-gray-400" />
                <span className="text-gray-400">
                  Adelaide, Australia<br />
                  From Brahmanbaria, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Nahid Ashraf Uday. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-gray-400">
                Built with Next.js & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}