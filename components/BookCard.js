export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-2 text-gray-900">
        {book.title}
      </h3>
      <p className="text-gray-600 mb-4">
        {book.description}
      </p>
      <div className="flex gap-3">
        {book.rokomari && (
          <a 
            href={book.rokomari}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            Rokomari
          </a>
        )}
        {book.boibazar && (
          <a 
            href={book.boibazar}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white"
          >
            Boibazar
          </a>
        )}
      </div>
    </div>
  )
}