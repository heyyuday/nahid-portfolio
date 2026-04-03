'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, BookOpen, Users, Calendar, Target, Heart } from 'lucide-react'

export default function About() {
  const timeline = [
    { year: '2013', event: 'Started professional writing career', icon: Calendar },
    { year: '2015', event: 'Published first novel "The Beginning"', icon: BookOpen },
    { year: '2018', event: 'Won Best New Author Award', icon: Award },
    { year: '2020', event: 'Reached 10,000+ readers milestone', icon: Users },
    { year: '2022', event: 'Launched content writing services', icon: Target },
    { year: '2024', event: 'Published 15th book', icon: Heart },
  ]

  const achievements = [
    'Best New Author Award 2018',
    'Featured in Jugantor Literary Magazine',
    'Top 10 Bengali Authors (Protidiner Bangladesh)',
    '50,000+ Books Sold',
    'Content Creator for Major Brands',
    'Guest Speaker at Writing Workshops',
  ]

  const values = [
    {
      icon: BookOpen,
      title: 'Storytelling Excellence',
      description: 'Every word crafted with precision and passion to create immersive narratives.'
    },
    {
      icon: Heart,
      title: 'Authentic Connection',
      description: 'Building genuine relationships with readers through honest, relatable content.'
    },
    {
      icon: Target,
      title: 'Creative Innovation',
      description: 'Constantly exploring new perspectives and pushing creative boundaries.'
    },
  ]

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
              About Me
            </h1>
            <p className="text-2xl text-secondary leading-relaxed">
              Author, storyteller, and creative mind dedicated to crafting narratives that inspire and transform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-24"
            >
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/best digital marketer bangladesh.jpg"
                  alt="Nahid Ashraf Uday"
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
              className="space-y-6 text-lg text-secondary leading-relaxed"
            >
              <h2 className="text-4xl font-bold text-primary mb-6">My Journey</h2>
              
              <p>
                From a young age, I discovered the magic of words and their power to transport minds 
                to different worlds. What began as scribbles in notebooks evolved into a lifelong 
                passion for storytelling that has defined my career and purpose.
              </p>

              <p>
                Over the past decade, I've had the privilege of publishing 15+ books spanning various 
                genres—from contemporary fiction to thought-provoking non-fiction. Each work represents 
                countless hours of research, writing, and refining, driven by an unwavering commitment 
                to quality and authenticity.
              </p>

              <p>
                My writing journey extends beyond books. As a professional content writer and copywriter, 
                I've collaborated with leading brands and publications across Bangladesh, creating 
                compelling content that resonates with diverse audiences. Whether it's crafting engaging 
                blog posts, persuasive marketing copy, or thought leadership articles, I bring the same 
                dedication to excellence.
              </p>

              <p>
                What drives me isn't just the act of writing—it's the connection formed with readers. 
                Every piece of feedback, every shared story, every moment when words bridge the gap 
                between strangers, reinforces why I do what I do.
              </p>

              <p>
                Beyond writing, I'm passionate about mentoring aspiring authors, conducting workshops, 
                and contributing to the literary community. I believe in the transformative power of 
                stories and the responsibility we hold as storytellers to create meaningful, impactful content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What I Stand For
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              The principles that guide every story I write
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <value.icon size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Milestones
            </h2>
            <p className="text-xl text-secondary">
              Key moments in my writing journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-accent last:pb-0"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white" />
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-2">
                    <item.icon size={24} className="text-accent" />
                    <span className="text-2xl font-bold text-accent">{item.year}</span>
                  </div>
                  <p className="text-lg text-primary font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-300">
              Honored to be recognized by readers and industry peers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl flex items-start gap-3"
              >
                <Award className="text-accent flex-shrink-0 mt-1" size={24} />
                <span className="text-lg">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Mentions */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Media & Press
            </h2>
            <p className="text-xl text-secondary mb-8">
              My work has been featured in leading publications and media outlets across Bangladesh.
            </p>
            <div className="space-y-4 text-left bg-[#f5f5f7] p-8 rounded-2xl">
              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg italic text-secondary mb-2">
                  "Nahid Ashraf Uday brings a fresh perspective to Bengali literature with stories 
                  that resonate across generations."
                </p>
                <p className="font-semibold text-primary">— Jugantor Literary Review</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg italic text-secondary mb-2">
                  "One of the most promising voices in contemporary Bengali writing."
                </p>
                <p className="font-semibold text-primary">— Protidiner Bangladesh</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg italic text-secondary mb-2">
                  "A master storyteller who knows how to captivate readers from the first page."
                </p>
                <p className="font-semibold text-primary">— Earki Magazine</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
