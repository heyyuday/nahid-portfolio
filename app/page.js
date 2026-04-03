'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Briefcase, ArrowRight, Award, Users, TrendingUp, Star, Sparkles, ChevronRight } from 'lucide-react'
import Newsletter from '../components/Newsletter'
import { useRef } from 'react'

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Real books from Goodreads
  const featuredBooks = [
    {
      id: 1,
      title: 'Hawai Mithai',
      titleBengali: 'হাওয়াই মিঠাই',
      description: 'A celebrated debut blending gentle humor and sharp satire. Winner of hearts at the 2023 Ekushey Book Fair.',
      cover: '/images/hawai-mithai.jpg',
      rating: 4.56,
      reviews: 9,
      year: 2023,
      genre: 'Humor & Satire',
      featured: true,
      rokomari: 'https://www.rokomari.com/book/author/74400/nahid-ashraf-uday',
      boibazar: 'https://www.boibazar.com/author-books/nahid-ashraf-uday',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 2,
      title: 'Paap Ebong Punno',
      titleBengali: 'পাপ এবং পুণ্য',
      description: 'An exploration of morality through compelling narratives and thought-provoking Bengali storytelling.',
      cover: '/images/paap-punno.jpg',
      rating: 5.0,
      reviews: 0,
      year: 2023,
      genre: 'Philosophy',
      featured: false,
      rokomari: 'https://www.rokomari.com/book/author/74400/nahid-ashraf-uday',
      boibazar: 'https://www.boibazar.com/author-books/nahid-ashraf-uday',
      color: 'from-blue-400 to-purple-500'
    }
  ]

  const publications = [
    { name: 'Jugantor', icon: '📰', url: 'https://www.jugantor.com' },
    { name: 'Protidiner Bangladesh', icon: '📃', url: 'https://protidinerbangladesh.com' },
    { name: 'Earki', icon: '📱', url: 'https://www.earki.co' },
    { name: 'Goodreads', icon: '⭐', url: 'https://www.goodreads.com/author/show/29731524.Nahid_Ashraf_Uday' },
  ]

  const stats = [
    { icon: BookOpen, value: '2', label: 'Published Books', suffix: '+' },
    { icon: Users, value: '5', label: 'Readers Worldwide', suffix: 'K+' },
    { icon: Award, value: '4.56', label: 'Goodreads Rating', suffix: '★' },
    { icon: TrendingUp, value: '2023', label: 'Debut Author', suffix: '' },
  ]

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ opacity, y }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-block mb-6"
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                  <Sparkles size={18} />
                  <span>Best Sarcastic Humor Writer in Bangladesh</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Nahid Ashraf Uday
              </motion.h1>
              
              <motion.div
                className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Bangladeshi Author & Sarcastic Storyteller
              </motion.div>
              
              <motion.p
                className="text-xl text-gray-700 mb-4 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Born in <strong>Brahmanbaria</strong>, raised in <strong>Dhaka</strong>. Author of <strong>"Hawai Mithai"</strong> and <strong>"Paap Ebong Punno"</strong> — blending Bengali humor with sharp social satire.
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Published at <strong>2023 Ekushey Book Fair</strong>. Featured in Jugantor, Protidiner Bangladesh, and Earki. Inspired by <strong>Humayun Ahmed</strong>. Currently pursuing Master's at <strong>University of Adelaide, Australia</strong>.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link href="/books" className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                  <span className="relative z-10 flex items-center gap-2">
                    <BookOpen size={20} />
                    Explore My Books
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                <Link href="/services" className="group px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all flex items-center gap-2 justify-center">
                  <Briefcase size={20} />
                  Hire Me for Writing
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image with 3D effect */}
            <motion.div
              style={{ opacity, scale }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div 
                className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Nahid Ashraf Uday - Bangladeshi Author, Best Sarcastic Humor Writer, Bengali Literature"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500 fill-yellow-500" size={24} />
                  <div>
                    <div className="font-bold text-2xl text-gray-900">4.56★</div>
                    <div className="text-sm text-gray-600">Goodreads</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-4 backdrop-blur-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="text-blue-600" size={24} />
                  <div>
                    <div className="font-bold text-2xl text-gray-900">2 Books</div>
                    <div className="text-sm text-gray-600">Published 2023</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  className="inline-block mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur-lg group-hover:bg-white/20 transition-all"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon size={48} className="text-blue-300" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">
              Published Bengali Books
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Humor, satire, and stories that resonate with Bengali readers. Available on Rokomari and Boibazar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
                  {/* Book Cover */}
                  <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative h-full"
                    >
                      <Image
                        src={book.cover}
                        alt={`${book.title} by Nahid Ashraf Uday - ${book.genre} - Bengali Book ${book.year}`}
                        fill
                        className="object-cover"
                      />
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      />
                    </motion.div>

                    {/* Featured badge */}
                    {book.featured && (
                      <motion.div
                        className={`absolute top-4 right-4 bg-gradient-to-r ${book.color} text-white px-4 py-2 rounded-full font-bold shadow-lg`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Bestseller
                      </motion.div>
                    )}

                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <Star size={18} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-gray-900">{book.rating}</span>
                      <span className="text-gray-600">({book.reviews})</span>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-8">
                    <div className={`inline-block bg-gradient-to-r ${book.color} text-white px-3 py-1 rounded-full text-sm font-bold mb-4`}>
                      {book.genre}
                    </div>

                    <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                      {book.title}
                    </h3>

                    <p className="text-2xl text-gray-600 mb-4">
                      {book.titleBengali}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {book.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={book.rokomari}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-center hover:shadow-lg transition-all"
                      >
                        Rokomari
                      </motion.a>
                      <motion.a
                        href={book.boibazar}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-bold text-center hover:shadow-lg transition-all"
                      >
                        Boibazar
                      </motion.a>
                    </div>
                  </div>
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
            <Link href="/books" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all group">
              View All Books
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured In */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Published & Featured In
            </h2>
            <p className="text-xl text-gray-600">
              Recognized by leading Bangladeshi publications and literary platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {publications.map((pub, index) => (
              <motion.a
                key={pub.name}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center group"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{pub.icon}</div>
                <div className="text-center font-semibold text-primary">{pub.name}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Professional Writing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bengali and English content writing, copywriting, and social media marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: BookOpen, 
                title: 'Content Writing', 
                description: 'SEO-optimized Bengali and English articles that engage and convert',
                price: '৳5,000',
                color: 'from-blue-400 to-cyan-400'
              },
              { 
                icon: Briefcase, 
                title: 'Copywriting', 
                description: 'Persuasive sales copy that drives action and builds your brand',
                price: '৳8,000',
                color: 'from-purple-400 to-pink-400'
              },
              { 
                icon: TrendingUp, 
                title: 'Facebook Marketing', 
                description: 'Strategic social media campaigns for the Bangladeshi market',
                price: '৳15,000/mo',
                color: 'from-orange-400 to-red-400'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all group border border-white/20"
              >
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-r ${service.color} rounded-2xl mb-6`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all group">
              Explore All Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}