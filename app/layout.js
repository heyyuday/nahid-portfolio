import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Nahid Ashraf Uday | Bangladeshi Author | Best Sarcastic Humor Writer | Bengali Books',
  description: 'Nahid Ashraf Uday - Bangladeshi author from Brahmanbaria. Published "Hawai Mithai" (4.56★) and "Paap Ebong Punno" at 2023 Ekushey Book Fair. Best sarcastic humor writer blending Bengali satire with social commentary.',
  keywords: 'Nahid Ashraf Uday, Bangladeshi author, Bengali writer, Brahmanbaria author, Hawai Mithai, Paap Ebong Punno, best sarcastic writer Bangladesh, Bengali humor books',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}