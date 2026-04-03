'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Briefcase, ArrowRight, Award, Users, Star, Sparkles, ChevronRight, Zap, TrendingUp, CheckCircle, Globe } from 'lucide-react'
import Newsletter from '../components/Newsletter'
import { useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [0, 50])

  const stats = [
    { icon: BookOpen, value: '2', label: 'Published Books', suffix: '+', color: 'blue' },
    { icon: Users, value: '5K', label: 'Readers', suffix: '+', color: 'purple' },
    { icon: Award, value: '4.56', label: 'Rating', suffix: '★', color: 'yellow' },
    { icon: TrendingUp, value: '100', label: 'Happy Clients', suffix: '+', color: 'green' },
  ]

  const services = [
    {
      icon: Globe,
      title: 'Facebook Marketing',
      description: 'Strategic social media campaigns that drive real results for Bangladeshi businesses',
      price: '৳15,000',
      period: '/month',
      features: ['Content Strategy', 'Ad Campaign Management', 'Audience Targeting', 'Analytics & Reports'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.2
    },
    {
      icon: Zap,
      title: 'Professional Copywriting',
      description: 'Persuasive Bengali & English copy that converts readers into customers',
      price: '৳8,000',
      period: '/project',
      features: ['Sales Pages', 'Email Campaigns', 'Ad Copy', 'Landing Pages'],
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: BookOpen,
      title: 'Content Writing',
      description: 'SEO-optimized articles and blogs that rank and engage your audience',
      price: '৳5,000',
      period: '/article',
      features: ['Blog Posts', 'SEO Articles', 'Website Content', 'Social Media'],
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              style={{ opacity, y }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Minimal badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gray-900 text-white rounded-full text-sm font-medium"
              >
                <Sparkles size={16} />
                <span>Best Bengali Author & Facebook Marketer Bangladesh</span>
              </motion.div>

              <motion.h1
                className="text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Nahid Ashraf Uday
              </motion.h1>
              
              <motion.p
                className="text-2xl lg:text-3xl text-gray-600 mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Bangladeshi Author • Copywriter • Facebook Marketing Expert
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Published author of <strong className="text-gray-900">Hawai Mithai</strong> (4.56★) and <strong className="text-gray-900">Paap Ebong Punno</strong>. Professional copywriter and Facebook marketing specialist helping Bangladeshi businesses grow online.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link 
                  href="/services" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all"
                >
                  Hire Me as Copywriter
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/books" 
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all"
                >
                  <BookOpen size={20} />
                  Read My Books
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              style={{ opacity, scale }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Nahid Ashraf Uday - Best Bengali Author Bangladesh, Professional Copywriter, Facebook Marketing Expert"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Floating cards - Apple style */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-lg border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <Star className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">4.56★</div>
                    <div className="text-sm text-gray-500">Author Rating</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 backdrop-blur-lg border border-gray-100"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">5K+</div>
                    <div className="text-sm text-gray-500">Happy Readers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex p-4 bg-gray-50 rounded-2xl mb-4"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon size={32} className="text-gray-900" />
                </motion.div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Services
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Expert Facebook marketing, copywriting, and content creation for Bangladeshi businesses
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-gray-900 transition-all"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-500">{service.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="block w-full py-4 bg-gray-900 text-white text-center rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Published Bengali Books
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Acclaimed humor and satire books by best Bengali author in Bangladesh
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: 'Hawai Mithai',
                titleBengali: 'হাওয়াই মিঠাই',
                cover: '/images/hawai-mithai.jpg',
                rating: 4.56,
                description: 'A celebrated debut blending gentle humor and sharp Bengali satire',
                year: 2023,
                delay: 0.2
              },
              {
                title: 'Paap Ebong Punno',
                titleBengali: 'পাপ এবং পুণ্য',
                cover: '/images/paap-punno.jpg',
                rating: 5.0,
                description: 'Philosophical exploration of morality in modern Bangladeshi society',
                year: 2023,
                delay: 0.3
              }
            ].map((book) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: book.delay }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-gray-900 transition-all"
              >
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={`${book.title} - ${book.titleBengali} - Bengali Book by Best Author Bangladesh`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-yellow-500" size={18} />
                      <span className="font-bold text-gray-900">{book.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{book.year}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {book.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-4">
                    {book.titleBengali}
                  </p>
                  
                  <p className="text-gray-500 mb-6">
                    {book.description}
                  </p>

                  <Link
                    href="/books"
                    className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/books" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              <BookOpen size={20} />
              View All Books
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose Me
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Best Bengali author and Facebook marketing expert in Bangladesh
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Published Author',
                description: 'Acclaimed Bengali writer with 4.56★ rating on Goodreads. Featured in Jugantor, Protidiner Bangladesh, and Earki.',
                delay: 0.2
              },
              {
                icon: Zap,
                title: 'Professional Copywriter',
                description: 'Expert in persuasive Bengali and English copy that converts. Proven track record with Bangladeshi businesses.',
                delay: 0.3
              },
              {
                icon: TrendingUp,
                title: 'Facebook Marketing Specialist',
                description: 'Strategic social media campaigns that drive real results. Deep understanding of Bangladesh market.',
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-gray-50 rounded-2xl mb-6">
                  <item.icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}