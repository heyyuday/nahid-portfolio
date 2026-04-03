import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Nahid Ashraf Uday - Author & Storyteller',
  description: 'Professional author, content writer, and storyteller crafting compelling narratives.',
  keywords: 'author, writer, storyteller, content writing, copywriting, Bangladesh',
  openGraph: {
    title: 'Nahid Ashraf Uday - Author & Storyteller',
    description: 'Professional author, content writer, and storyteller crafting compelling narratives.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
