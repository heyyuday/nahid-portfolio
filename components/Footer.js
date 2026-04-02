'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Books', href: '/books' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-[#f5f5f7] pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Nahid Ashraf Uday</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Author & Storyteller crafting compelling narratives that resonate with readers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all duration-300 shadow-md"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2">
              <li className="text-secondary">Content Writing</li>
              <li className="text-secondary">Copywriting</li>
              <li className="text-secondary">Facebook Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-secondary">
                <Mail size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:nahid@example.com" className="hover:text-accent transition-colors">
                  nahid@example.com
                </a>
              </li>
              <li className="flex items-start text-secondary">
                <Phone size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+8801234567890" className="hover:text-accent transition-colors">
                  +880 123 456 7890
                </a>
              </li>
              <li className="flex items-start text-secondary">
                <MapPin size={20} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary text-sm">
              © {currentYear} Nahid Ashraf Uday. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-secondary hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
