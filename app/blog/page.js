'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Tag } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: '10 Tips for Writing Viral Facebook Content in Bangladesh',
      excerpt: 'Learn the secrets to creating engaging social media posts that resonate with Bangladeshi audiences and drive real engagement.',
      category: 'Facebook Marketing',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/images/blog-1.jpg',
      slug: 'viral-facebook-content-bangladesh'
    },
    {
      id: 2,
      title: 'The Art of Bengali Copywriting: Speaking to Your Audience',
      excerpt: 'Discover how to craft compelling copy in Bengali that connects emotionally and drives action from your target market.',
      category: 'Copywriting',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: '/images/blog-2.jpg',
      slug: 'bengali-copywriting-guide'
    },
    {
      id: 3,
      title: 'How I Became a Published Author at 25',
      excerpt: 'My journey from aspiring writer to published Bengali author. Lessons learned and advice for new writers.',
      category: 'Writing Journey',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: '/images/blog-3.jpg',
      slug: 'journey-to-published-author'
    },
    {
      id: 4,
      title: 'SEO Content Writing for Bangladeshi Businesses',
      excerpt: 'A complete guide to creating content that ranks on Google while engaging your local audience.',
      category: 'Content Writing',
      date: 'February 28, 2024',
      readTime: '8 min read',
      image: '/images/blog-4.jpg',
      slug: 'seo-content-writing-guide'
    },
    {
      id: 5,
      title: 'Social Media Marketing Trends in Bangladesh 2024',
      excerpt: 'Stay ahead of the curve with these emerging trends in Bangladeshi social media marketing.',
      category: 'Facebook Marketing',
      date: 'February 20, 2024',
      readTime: '6 min read',
      image: '/images/blog-5.jpg',
      slug: 'social-media-trends-2024'
    },
    {
      id: 6,
      title: 'Writing Humor: Lessons from Humayun Ahmed',
      excerpt: 'How the legendary author influenced my writing style and what we can all learn from his approach.',
      category: 'Writing Journey',
      date: 'February 15, 2024',
      readTime: '9 min read',
      image: '/images/blog-6.jpg',
      slug: 'lessons-from-humayun-ahmed'
    }
  ]

  const categories = ['All', 'Facebook Marketing', 'Copywriting', 'Content Writing', 'Writing Journey']

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Blog
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed"
            >
              Insights on writing, marketing, and Bengali literature. Tips and stories from a professional copywriter and published author.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-gray-900 hover:text-gray-900 transition-all"
              >
                <Tag className="inline mr-2" size={16} />
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-gray-900 transition-all group"
              >
                {/* Placeholder Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <BookOpen size={64} className="text-gray-300" />
                </div>

                <div className="p-6">
                  <div className="inline-block bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    {post.category}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-12 bg-gray-50 rounded-3xl max-w-2xl mx-auto"
          >
            <TrendingUp size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">More Posts Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              I'm working on new articles about copywriting, Facebook marketing, and Bengali literature. Subscribe to my newsletter to get notified.
            </p>
            <Link
              href="/#newsletter"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}