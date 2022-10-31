import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Aim from './Aim'
import Projects from './Projects'
import FirstPage from './FirstPage'
import Footer from './Footer'
import Team from './Team'
import Join from './JoinUs'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  return <>
  <Navbar/>
  <FirstPage/>
  <Component {...pageProps} />
  <Aim/>
  <Projects/>
  <Team/>
  <Join/>
  <Footer/>
  </>
}

export default MyApp
