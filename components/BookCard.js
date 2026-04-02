'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function BookCard({ book, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <Image
          src={book.cover || '/images/book-placeholder.jpg'}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-accent transition-colors">
          {book.title}
        </h3>
        <p className="text-secondary mb-6 line-clamp-3">
          {book.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {book.rokomari && (
            <motion.a
              href={book.rokomari}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={18} />
              Buy on Rokomari
            </motion.a>
          )}
          
          {book.boibazar && (
            <motion.a
              href={book.boibazar}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
            >
              <ExternalLink size={18} />
              Buy on Boibazar
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
