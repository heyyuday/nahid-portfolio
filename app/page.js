'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Briefcase, ArrowRight, Award, Users, TrendingUp } from 'lucide-react'
import Newsletter from '@/components/Newsletter'
import BookCard from '@/components/BookCard'

export default function Home() {
  // Sample data - replace with actual data from CMS or database
  const featuredBooks = [
    {
      id: 1,
      title: 'The Silent Echo',
      description: 'A gripping tale of mystery and redemption set in the heart of Bangladesh.',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 2,
      title: 'Beyond the Horizon',
      description: 'An inspiring journey through love, loss, and finding oneself.',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 3,
      title: 'Whispers of Tomorrow',
      description: 'A collection of short stories exploring the human condition.',
      cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    }
  ]

  const publications = [
    { name: 'Jugantor', logo: '📰' },
    { name: 'Protidiner Bangladesh', logo: '📃' },
    { name: 'Earki', logo: '📱' },
    { name: 'Daily Star', logo: '⭐' },
  ]

  const stats = [
    { icon: BookOpen, value: '15+', label: 'Books Published' },
    { icon: Users, value: '50K+', label: 'Readers' },
    { icon: Award, value: '8', label: 'Awards Won' },
    { icon: TrendingUp, value: '10+', label: 'Years Experience' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Nahid Ashraf Uday
              </motion.h1>
              
              <motion.div
                className="text-2xl md:text-3xl text-gradient font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Author & Storyteller
              </motion.div>
              
              <motion.p
                className="text-xl text-secondary mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Crafting compelling narratives that inspire, entertain, and resonate with readers across the globe.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link href="/books" className="btn-primary text-center">
                  Explore Books
                </Link>
                <Link href="/services" className="btn-outline text-center">
                  Hire Me
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600"
                  alt="Nahid Ashraf Uday"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={48} className="mx-auto mb-4 text-accent" />
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                About Me
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                With over a decade of experience in storytelling, I've dedicated my life to crafting 
                narratives that touch hearts and inspire minds. My journey as an author has been one 
                of continuous learning, growth, and connection with readers worldwide.
              </p>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                Through my books, articles, and content, I explore the depths of human emotion, 
                culture, and the beauty of the written word. Each story is a window into different 
                worlds, perspectives, and experiences.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-4 transition-all">
                Read Full Story
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600"
                alt="Writing desk"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured In
            </h2>
            <p className="text-lg text-secondary">
              Recognized by leading publications and media outlets
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
              >
                <div className="text-4xl mb-3">{pub.logo}</div>
                <div className="text-center font-semibold text-primary">{pub.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Featured Books
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Explore my latest works and dive into worlds of imagination
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBooks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/books" className="btn-primary inline-block">
              View All Books
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-primary to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's bring your stories and ideas to life with professional writing services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: BookOpen, title: 'Content Writing', description: 'Engaging articles, blogs, and web content' },
              { icon: Briefcase, title: 'Copywriting', description: 'Persuasive copy that converts' },
              { icon: TrendingUp, title: 'Facebook Marketing', description: 'Strategic social media campaigns' }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all"
              >
                <service.icon size={48} className="mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/services" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-block">
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
