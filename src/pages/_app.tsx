import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return  <div className="flex flex-col min-h-screen">
  <Header />
  <Navbar />
  <div className="flex-grow">
    <Component {...pageProps} /> 
  </div>
  <Footer/>
</div>

}

export default MyApp