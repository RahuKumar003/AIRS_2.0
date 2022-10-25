import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
