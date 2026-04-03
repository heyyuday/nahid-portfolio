'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, ExternalLink, ShoppingCart, BookOpen, Award, TrendingUp, X } from 'lucide-react'
import Image from 'next/image'
import Newsletter from '../../components/Newsletter'

export default function Books() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBook, setSelectedBook] = useState(null)
  const [showBuyModal, setShowBuyModal] = useState(false)

  const books = [
    {
      id: 1,
      title: 'Hawai Mithai',
      titleBengali: 'হাওয়াই মিঠাই',
      author: 'Nahid Ashraf Uday',
      cover: '/images/hawai-mithai.jpg',
      category: 'Humor',
      rating: 4.56,
      reviews: 9,
      year: 2023,
      description: 'A celebrated debut that introduced readers to Nahid Ashraf Uday\'s unique blend of gentle humor and sharp satire. This sarcastic masterpiece mirrors everyday Bangladeshi life with wit and wisdom, making readers laugh while reflecting on society.',
      highlights: [
        'Debut novel at 2023 Ekushey Book Fair',
        'Blend of comedy and social satire',
        'Humorous take on Bengali culture',
        'Gentle simplicity with sharp observations'
      ],
      featured: true,
      rokomari: 'https://www.rokomari.com/book/author/74400/nahid-ashraf-uday',
      boibazar: 'https://www.boibazar.com/author-books/nahid-ashraf-uday'
    },
    {
      id: 2,
      title: 'Paap Ebong Punno',
      titleBengali: 'পাপ এবং পুণ্য',
      author: 'Nahid Ashraf Uday',
      cover: '/images/paap-punno.jpg',
      category: 'Philosophy',
      rating: 5.0,
      reviews: 0,
      year: 2023,
      description: 'An exploration of morality, sin, and virtue through compelling narratives and thought-provoking storytelling. This book combines humor with deep philosophical questions about human nature and ethical dilemmas in modern Bangladeshi society.',
      highlights: [
        'Explores moral complexities',
        'Witty philosophical discussions',
        'Contemporary social commentary',
        'Engaging narrative style'
      ],
      featured: false,
      rokomari: 'https://www.rokomari.com/book/author/74400/nahid-ashraf-uday',
      boibazar: 'https://www.boibazar.com/author-books/nahid-ashraf-uday'
    }
  ]

  const categories = ['all', 'Humor', 'Philosophy', 'Satire']

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.titleBengali.includes(searchQuery) ||
                         book.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openBuyModal = (book) => {
    setSelectedBook(book)
    setShowBuyModal(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gray-900 text-white rounded-full text-sm font-medium"
            >
              <Award size={16} />
              <span>Best Sarcastic Humor Writer in Bangladesh</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
            >
              Bengali Books
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-500 leading-relaxed mb-8"
            >
              Sarcastic storytelling that makes you laugh and think. Published Bengali books blending gentle humor with sharp social commentary.
            </motion.p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Star, text: '4.56★ Average Rating', color: 'text-yellow-600' },
                { icon: BookOpen, text: '2 Published Books', color: 'text-blue-600' },
                { icon: Award, text: '2023 Book Fair Debut', color: 'text-purple-600' },
                { icon: TrendingUp, text: '5K+ Readers', color: 'text-green-600' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"
                >
                  <badge.icon size={18} className={badge.color} />
                  <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search books by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-all"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-4 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                  }`}
                >
                  <Filter className="inline mr-2" size={18} />
                  {category === 'all' ? 'All Books' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-gray-900 transition-all"
              >
                {/* Book Cover */}
                <div className="relative h-96 bg-gray-100 overflow-hidden">
                  <Image
                    src={book.cover}
                    alt={`${book.title} by Nahid Ashraf Uday - Best Bengali humor and satire book`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {book.featured && (
                    <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ Bestseller
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star size={18} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-900">{book.rating}</span>
                    <span className="text-gray-600">({book.reviews})</span>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-8">
                  <div className="inline-block bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-4">
                    {book.category}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {book.title}
                  </h3>

                  <p className="text-xl text-gray-600 mb-4">
                    {book.titleBengali}
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {book.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {book.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <BookOpen size={16} className="text-gray-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => openBuyModal(book)}
                    className="w-full py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    Buy This Book
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* About Author */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About the Author
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                <strong className="text-gray-900">Nahid Ashraf Uday</strong> is Bangladesh's rising star in sarcastic humor writing. Born in Brahmanbaria and raised in Dhaka, he combines gentle humor with sharp social satire. Inspired by the legendary <strong className="text-gray-900">Humayun Ahmed</strong>, his work has been featured in <strong className="text-gray-900">Jugantor</strong>, <strong className="text-gray-900">Protidiner Bangladesh</strong>, and <strong className="text-gray-900">Earki</strong>.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Read Full Bio
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Buy Modal */}
      <AnimatePresence>
        {showBuyModal && selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowBuyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gray-900 p-8 text-white relative">
                <button
                  onClick={() => setShowBuyModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
                <ShoppingCart size={48} className="mb-4" />
                <h2 className="text-3xl font-bold mb-2">Choose Where to Buy</h2>
                <p className="text-gray-300">{selectedBook.title}</p>
                <p className="text-gray-400 text-lg">{selectedBook.titleBengali}</p>
              </div>

              {/* Buy Options */}
              <div className="p-8 space-y-4">
                <p className="text-gray-600 mb-6 text-center">
                  Select your preferred online bookstore
                </p>

                <a
                  href={selectedBook.rokomari}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-1">Rokomari.com</div>
                      <div className="text-white/90">Bangladesh's largest bookstore</div>
                    </div>
                    <ExternalLink size={32} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href={selectedBook.boibazar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-1">Boibazar.com</div>
                      <div className="text-white/90">Trusted Bengali marketplace</div>
                    </div>
                    <ExternalLink size={32} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <button
                  onClick={() => setShowBuyModal(false)}
                  className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}