import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nahid Ashraf Uday</h3>
            <p className="text-gray-600">Author & Storyteller</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/about" className="block text-gray-600 hover:text-blue-600">About</Link>
              <Link href="/books" className="block text-gray-600 hover:text-blue-600">Books</Link>
              <Link href="/services" className="block text-gray-600 hover:text-blue-600">Services</Link>
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600">Blog</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-600">Email: nahid@example.com</p>
            <p className="text-gray-600">Phone: +880 123 456 7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 text-center">
          <p className="text-gray-600">© {currentYear} Nahid Ashraf Uday. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}