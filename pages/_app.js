import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Aim from './Aim'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  return <>
  <Navbar/>
  <Component {...pageProps} />
  <Aim/>
  </>
}

export default MyApp
