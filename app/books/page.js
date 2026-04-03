'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import BookCard from '../../components/BookCard'
import { Search, SlidersHorizontal } from 'lucide-react'

export default function Books() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')

  // Sample books data - replace with actual data from CMS/database
  const books = [
    {
      id: 1,
      title: 'The Silent Echo',
      description: 'A gripping tale of mystery and redemption set in the heart of Bangladesh. Follow the journey of a detective unraveling secrets buried deep in history.',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      genre: 'Mystery',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 2,
      title: 'Beyond the Horizon',
      description: 'An inspiring journey through love, loss, and finding oneself in the chaos of modern life. A story that touches hearts.',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      genre: 'Romance',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 3,
      title: 'Whispers of Tomorrow',
      description: 'A collection of short stories exploring the human condition, culture, and the beauty of everyday moments.',
      cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
      genre: 'Short Stories',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 4,
      title: 'The Last Chapter',
      description: 'A thrilling adventure through time and space, questioning reality and the nature of existence itself.',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
      genre: 'Thriller',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 5,
      title: 'Seasons of Change',
      description: 'A heartwarming family saga spanning three generations, exploring themes of tradition, progress, and belonging.',
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
      genre: 'Drama',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
    {
      id: 6,
      title: 'Digital Dreams',
      description: 'A thought-provoking exploration of technology, humanity, and what it means to be human in the digital age.',
      cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400',
      genre: 'Science Fiction',
      rokomari: 'https://rokomari.com',
      boibazar: 'https://boibazar.com'
    },
  ]

  const genres = ['all', ...new Set(books.map(book => book.genre))]

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

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
              My Books
            </h1>
            <p className="text-2xl text-secondary leading-relaxed">
              Explore my collection of stories, each crafted with passion and purpose to inspire, 
              entertain, and provoke thought.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                <input
                  type="text"
                  placeholder="Search books by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-accent outline-none text-lg"
                />
              </div>

              {/* Genre Filter */}
              <div className="relative">
                <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" size={20} />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="pl-12 pr-8 py-4 rounded-full border-2 border-gray-200 focus:border-accent outline-none text-lg bg-white cursor-pointer appearance-none"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'All Genres' : genre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <p className="text-secondary text-center">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
            </p>
          </motion.div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-secondary">
                No books found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              I'm constantly working on new projects. Stay updated with my latest releases and 
              exclusive content by subscribing to my newsletter.
            </p>
            <a href="#newsletter" className="btn-primary bg-accent inline-block">
              Subscribe to Newsletter
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
