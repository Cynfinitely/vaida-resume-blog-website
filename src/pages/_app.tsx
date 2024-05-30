import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header />
  <Navbar />
  <Component {...pageProps} /> 
  <Footer/>
  </>;

}

export default MyApp