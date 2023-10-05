import './globals.css'
import { Lato, Rajdhani } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const lato = Lato({ 
  weight: ["300", "400", "700"], 
  subsets: ['latin'], 
  variable: '--font-lato'  
})
const rajdhani = Rajdhani({ 
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'], 
  variable: '--font-rajdhani' 
})

export const metadata = {
  title: 'TinyBIT',
  description: 'Strony internetowe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${rajdhani.variable}`}>
      <body>
        <Navbar />
          {children}
        <Footer />
        </body>
    </html>
  )
}
