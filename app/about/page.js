'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Award, Globe, Heart, TrendingUp, Users, Star, MapPin, GraduationCap, Briefcase } from 'lucide-react'

export default function About() {
  const timeline = [
    { year: '1998', event: 'Born in Brahmanbaria, Bangladesh', icon: MapPin },
    { year: '2018', event: 'Started professional writing career', icon: Briefcase },
    { year: '2023', event: 'Published "Hawai Mithai" at Ekushey Book Fair', icon: BookOpen },
    { year: '2023', event: 'Published "Paap Ebong Punno"', icon: BookOpen },
    { year: '2024', event: 'Pursuing Master\'s at University of Adelaide', icon: GraduationCap },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Authentic Storytelling',
      description: 'Creating genuine Bengali narratives that resonate with readers and reflect our culture',
    },
    {
      icon: Award,
      title: 'Excellence in Craft',
      description: 'Commitment to producing high-quality content that exceeds expectations',
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Helping Bangladeshi businesses grow through strategic content and marketing',
    },
  ]

  const achievements = [
    { number: '4.56★', label: 'Goodreads Rating' },
    { number: '2', label: 'Published Books' },
    { number: '5K+', label: 'Readers Worldwide' },
    { number: '100+', label: 'Happy Clients' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed"
            >
              Bangladeshi author, professional copywriter, and Facebook marketing expert passionate about Bengali literature and helping businesses grow
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Nahid Ashraf Uday - Best Bengali Author Bangladesh"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nahid Ashraf Uday
              </h2>
              
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Born on <strong className="text-gray-900">August 21, 1998</strong> in <strong className="text-gray-900">Brahmanbaria</strong>, raised in <strong className="text-gray-900">Dhaka</strong>, I discovered my passion for storytelling at a young age. Deeply influenced by the legendary <strong className="text-gray-900">Humayun Ahmed</strong>, I developed a unique voice that blends gentle humor with sharp social satire.
              </p>

              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                My debut at the <strong className="text-gray-900">2023 Ekushey Book Fair</strong> introduced readers to my sarcastic yet thoughtful approach to Bengali literature. <strong className="text-gray-900">"Hawai Mithai"</strong> earned a <strong className="text-gray-900">4.56★ rating</strong> on Goodreads, establishing me as a fresh voice in Bangladeshi writing.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Beyond writing books, I help Bangladeshi businesses grow as a <strong className="text-gray-900">professional copywriter</strong> and <strong className="text-gray-900">Facebook marketing expert</strong>. Currently pursuing my <strong className="text-gray-900">Master's degree at the University of Adelaide, Australia</strong>, I continue to create content that resonates with Bengali readers worldwide.
              </p>

              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                <BookOpen size={20} />
                Read My Books
              </Link>
            </motion.div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {item.number}
                </div>
                <div className="text-gray-500 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Journey
            </h2>
            <p className="text-xl text-gray-500">
              From Brahmanbaria to becoming a published Bengali author
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <item.icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="pt-1">
                  <div className="text-sm font-bold text-gray-900 mb-1">{item.year}</div>
                  <div className="text-lg text-gray-600">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My Values
            </h2>
            <p className="text-xl text-gray-500">
              Principles that guide my work as an author and marketer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-gray-50 rounded-2xl mb-6">
                  <value.icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured In
            </h2>
            <p className="text-xl text-gray-500">
              Media mentions and publications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Jugantor', emoji: '📰' },
              { name: 'Protidiner Bangladesh', emoji: '📃' },
              { name: 'Earki', emoji: '📱' },
              { name: 'Goodreads', emoji: '⭐' },
            ].map((pub, index) => (
              <motion.div
                key={pub.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:border-gray-900 transition-all"
              >
                <div className="text-4xl mb-3">{pub.emoji}</div>
                <div className="text-sm font-semibold text-gray-900">{pub.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-500 mb-8">
              Looking for a professional copywriter or Facebook marketer for your business?
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              <Briefcase size={20} />
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}