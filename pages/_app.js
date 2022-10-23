import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  return <>
  <style jsx global>{`
  body {
    background: ${isDark ? "black" : "black"};
  }
`}</style>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
