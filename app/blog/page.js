'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import Newsletter from '@/components/Newsletter'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')

  // Sample blog posts - replace with actual data from CMS/database
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Crafting Compelling Characters',
      excerpt: 'Discover the secrets to creating characters that readers fall in love with and remember long after they finish your book.',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Writing Tips',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600'
    },
    {
      id: 2,
      title: 'Finding Your Unique Writing Voice',
      excerpt: 'Every writer has a unique voice waiting to be discovered. Here\'s how to find yours and make it stand out.',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Writing Tips',
      image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600'
    },
    {
      id: 3,
      title: 'Behind the Scenes: Writing "The Silent Echo"',
      excerpt: 'An inside look at the creative process, challenges, and inspirations behind my latest novel.',
      date: '2024-03-05',
      readTime: '10 min read',
      category: 'Behind the Scenes',
      image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=600'
    },
    {
      id: 4,
      title: '5 Content Writing Mistakes to Avoid',
      excerpt: 'Common pitfalls that can undermine your content marketing efforts and how to steer clear of them.',
      date: '2024-02-28',
      readTime: '7 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600'
    },
    {
      id: 5,
      title: 'The Power of Storytelling in Marketing',
      excerpt: 'Why stories sell better than facts, and how to harness storytelling in your marketing strategy.',
      date: '2024-02-20',
      readTime: '9 min read',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600'
    },
    {
      id: 6,
      title: 'Building a Writing Routine That Works',
      excerpt: 'Practical strategies for establishing a consistent writing practice, even with a busy schedule.',
      date: '2024-02-15',
      readTime: '5 min read',
      category: 'Productivity',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600'
    },
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(blogPosts.map(post => post.category))]

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
              Blog
            </h1>
            <p className="text-2xl text-secondary leading-relaxed mb-8">
              Insights on writing, storytelling, content creation, and the creative process.
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary" size={24} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-gray-200 focus:border-accent outline-none text-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-[#f5f5f7]">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white rounded-full font-medium text-primary hover:bg-accent hover:text-white transition-all shadow-md"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <>
              {/* Featured Post */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <Link href={`/blog/${filteredPosts[0].id}`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center card hover:shadow-2xl transition-shadow p-8 group">
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      <img
                        src={filteredPosts[0].image}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="inline-block px-4 py-1 bg-accent text-white rounded-full text-sm font-medium mb-4">
                        Featured
                      </div>
                      <h2 className="text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-lg text-secondary mb-6 leading-relaxed">
                        {filteredPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-secondary mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{new Date(filteredPosts[0].date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={18} />
                          <span>{filteredPosts[0].readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                        Read Article
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Other Posts */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="card group h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-primary">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-secondary mb-4 line-clamp-3 flex-1">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                            Read More
                            <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-secondary">
                No articles found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </>
  )
}
