import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Nahid Ashraf Uday | Best Bengali Author Bangladesh | Professional Copywriter | Facebook Marketing Expert',
  description: 'Nahid Ashraf Uday - Best Bengali author in Bangladesh. Published "Hawai Mithai" (4.56★) and "Paap Ebong Punno". Professional copywriter and Facebook marketing specialist. Expert in Bengali content writing, persuasive copywriting, and social media marketing for Bangladeshi businesses.',
  keywords: 'best Bengali author Bangladesh, best Bangla writer, Nahid Ashraf Uday, Facebook marketer Bangladesh, professional copywriter Bangladesh, Bengali copywriter, Facebook marketing expert BD, content writer Bangladesh',
  authors: [{ name: 'Nahid Ashraf Uday' }],
  openGraph: {
    title: 'Nahid Ashraf Uday | Best Bengali Author & Facebook Marketer Bangladesh',
    description: 'Published Bengali author (4.56★), professional copywriter, and Facebook marketing expert helping Bangladeshi businesses grow.',
    url: 'https://nahidashrafuday.com',
    siteName: 'Nahid Ashraf Uday',
    locale: 'en_US',
    type: 'website',
  },
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