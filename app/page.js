'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Briefcase, ArrowRight, Award, Users, TrendingUp, Star } from 'lucide-react'
import Newsletter from '../components/Newsletter'
import BookCard from '../components/BookCard'

export default function Home() {
  // Real books from your Goodreads profile
  const featuredBooks = [
    {
      id: 1,
      title: 'Hawai Mithai (হাওয়াই মিঠাই)',
      description: 'A celebrated debut blending gentle humor and subtle satire that mirrors everyday Bangladeshi life. Winner of hearts at the 2023 Book Fair.',
      cover: '/images/hawai-mithai.jpg',
      rokomari: 'https://www.rokomari.com/book/author/74400/nahid-ashraf-uday',
      boibazar: 'https://www.boibazar.com/author-books/nahid-ashraf-uday'
    },
    {
      id: 2,
      title: 'Paap Ebong Punno (পাপ এবং পুণ্য)',
      description: 'An exploration of morality, sin, and virtue through compelling narratives and thought-provoking storytelling.',
      cover: '/images/paap-punno.jpg',
      rokomari: 'https://www.rokomari.com/book/author/74400/nahid-ashraf-uday',
      boibazar: 'https://www.boibazar.com/author-books/nahid-ashraf-uday'
    }
  ]

  const publications = [
    { name: 'Jugantor', logo: '📰' },
    { name: 'Protidiner Bangladesh', logo: '📃' },
    { name: 'Earki', logo: '📱' },
    { name: 'Goodreads Author', logo: '⭐' },
  ]

  const stats = [
    { icon: BookOpen, value: '2+', label: 'Published Books' },
    { icon: Users, value: '5K+', label: 'Readers Worldwide' },
    { icon: Award, value: '4.56', label: 'Average Rating' },
    { icon: TrendingUp, value: '2023', label: 'Debut Author' },
  ]

  return (
    <>
      {/* SEO Meta Tags - Next.js will handle these */}
      
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
                Bangladeshi Author & Storyteller
              </motion.div>
              
              <motion.p
                className="text-xl text-secondary mb-4 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Born in Brahmanbaria, raised in Dhaka. Crafting Bengali literature that blends gentle humor, satire, and everyday life. Currently pursuing Master's at University of Adelaide, Australia.
              </motion.p>

              <motion.p
                className="text-lg text-secondary mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Published author of <strong>"Hawai Mithai"</strong> (2023) and <strong>"Paap Ebong Punno"</strong>. Featured in Jugantor, Protidiner Bangladesh, and Earki.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link href="/books" className="btn-primary text-center">
                  Explore My Books
                </Link>
                <Link href="/services" className="btn-outline text-center">
                  Hire Me for Writing
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
                  src="/images/hero-photo.jpg"
                  alt="Nahid Ashraf Uday - Bangladeshi Author and Storyteller from Brahmanbaria"
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
                About Nahid Ashraf Uday
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                Born on August 21, 1998, in Brahmanbaria, I spent most of my childhood in Dhaka, where books became my first love. From an early age, stories fascinated me—not just as a reader but as a dreamer who wanted to tell his own.
              </p>
              <p className="text-lg text-secondary leading-relaxed mb-6">
                My writing is celebrated for its gentle simplicity and subtle humor that often mirrors everyday Bangladeshi life. Inspired by the legendary <strong>Humayun Ahmed</strong>, I blend comedy, satire, and human emotions in my narratives.
              </p>
              <p className="text-lg text-secondary leading-relaxed mb-8">
                My debut book, <strong>"Hawai Mithai" (হাওয়াই মিঠাই)</strong>, released at the 2023 Ekushey Book Fair, introduced readers to my unique voice. Beyond writing, I'm pursuing my Master's degree at the University of Adelaide, Australia, exploring new horizons while staying connected to my Bengali roots.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:gap-4 transition-all">
                Read Full Biography
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
                src="/images/hero-photo.jpg"
                alt="Nahid Ashraf Uday writing desk"
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
              Published & Featured In
            </h2>
            <p className="text-lg text-secondary">
              Recognized by leading Bangladeshi publications and literary platforms
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
              Published Bengali Books
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Humor, satire, and stories that resonate with Bengali readers. Available on Rokomari and Boibazar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
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
              Professional Writing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bengali and English content writing, copywriting, and social media marketing services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: BookOpen, title: 'Content Writing', description: 'Engaging Bengali and English articles, blogs, and web content that resonates with your audience' },
              { icon: Briefcase, title: 'Copywriting', description: 'Persuasive sales copy in Bengali and English that drives conversions and builds brand voice' },
              { icon: TrendingUp, title: 'Facebook Marketing', description: 'Strategic Bangladeshi market-focused social media campaigns and content creation' }
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
              Hire Me for Writing Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}