'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Star, ExternalLink, ShoppingCart, Laugh, BookOpen, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function Books() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedBook, setSelectedBook] = useState(null)
  const [showBuyModal, setShowBuyModal] = useState(false)

  // Real books from Goodreads
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
      category: 'Psychology',
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

  const categories = ['all', 'Humor', 'Psychology', 'Satire']

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
      {/* SEO Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <Laugh className="inline mr-2" size={24} />
                Best Sarcastic Humor Writer in Bangladesh
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary leading-tight">
              Bengali Humor & Satire Books
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
              Sarcastic storytelling that makes you laugh and think. Published Bengali books blending gentle humor with sharp social commentary.
            </p>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              By <strong>Nahid Ashraf Uday</strong> - Published author featured in Jugantor, Protidiner Bangladesh, and Earki. Master of humorous writing inspired by the legendary Humayun Ahmed.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
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
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                >
                  <badge.icon size={20} className={badge.color} />
                  <span className="text-gray-700 font-semibold">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search books by title, genre, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-4 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Filter className="inline mr-2" size={18} />
                  {category === 'all' ? 'All Books' : category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Books Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="grid md:grid-cols-5 gap-6 p-6">
                  {/* Book Cover with Advanced Animations */}
                  <div className="md:col-span-2">
                    <motion.div 
                      className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow"
                      whileHover={{ 
                        rotateY: 5,
                        rotateX: 5,
                        scale: 1.05
                      }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {/* Animated gradient overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20"
                        initial={{ opacity: 0.3 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Book cover image with zoom effect */}
                      <Image
                        src={book.cover}
                        alt={`${book.title} by Nahid Ashraf Uday - Best Bengali humor and satire book`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Featured Badge with pulse animation */}
                      {book.featured && (
                        <motion.div 
                          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                              '0 20px 25px -5px rgba(234, 179, 8, 0.3)',
                              '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            ]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        >
                          ⭐ Featured
                        </motion.div>
                      )}

                      {/* Rating Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-gray-900">{book.rating}</span>
                        <span className="text-gray-600 text-sm">({book.reviews})</span>
                      </div>

                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                  </div>

                  {/* Book Details */}
                  <div className="md:col-span-3 flex flex-col">
                    <div className="flex-1">
                      <div className="inline-block bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {book.category}
                      </div>

                      <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {book.title}
                      </h3>

                      <p className="text-2xl text-gray-600 mb-4 font-bengali">
                        {book.titleBengali}
                      </p>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        {book.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-6">
                        {book.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <Laugh size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Buy Button with Animation */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openBuyModal(book)}
                      className="w-full py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                    >
                      {/* Animated background shine */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      />
                      <ShoppingCart size={20} className="relative z-10" />
                      <span className="relative z-10">Buy This Book Now</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

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

      {/* About the Author Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                About the Author
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Nahid Ashraf Uday</strong> is Bangladesh's rising star in sarcastic humor writing. Born in Brahmanbaria and raised in Dhaka, he combines gentle humor with sharp social satire.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Inspired by the legendary <strong>Humayun Ahmed</strong>, Nahid's writing celebrates Bengali culture while offering witty commentary on everyday life. His debut at the 2023 Ekushey Book Fair established him as a fresh voice in Bangladeshi literature.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                His work has been featured in <strong>Jugantor</strong>, <strong>Protidiner Bangladesh</strong>, and <strong>Earki</strong>, reaching thousands of readers who appreciate intelligent humor and thoughtful satire.
              </p>

              <div className="flex gap-4">
                
                  href="https://www.goodreads.com/author/show/29731524.Nahid_Ashraf_Uday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Star size={20} />
                  Goodreads Profile
                </a>
                
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Read Full Bio
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Nahid Ashraf Uday - Best Sarcastic Humor Writer in Bangladesh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buy Modal */}
      <AnimatePresence>
        {showBuyModal && selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowBuyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-8 text-white relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <ShoppingCart size={48} className="mb-4 relative z-10" />
                <h2 className="text-3xl font-bold mb-2 relative z-10">Choose Where to Buy</h2>
                <p className="text-white/90 relative z-10">{selectedBook.title} - {selectedBook.titleBengali}</p>
              </div>

              {/* Buy Options */}
              <div className="p-8 space-y-4">
                <p className="text-gray-600 mb-6 text-center">
                  Select your preferred online bookstore to purchase this book
                </p>

                {/* Rokomari Button */}
                <motion.a
                  href={selectedBook.rokomari}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-1">Rokomari.com</div>
                      <div className="text-white/90">Bangladesh's largest online bookstore</div>
                    </div>
                    <ExternalLink size={32} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>

                {/* Boibazar Button */}
                <motion.a
                  href={selectedBook.boibazar}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold mb-1">Boibazar.com</div>
                      <div className="text-white/90">Trusted Bengali book marketplace</div>
                    </div>
                    <ExternalLink size={32} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>

                {/* Cancel Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowBuyModal(false)}
                  className="w-full py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}