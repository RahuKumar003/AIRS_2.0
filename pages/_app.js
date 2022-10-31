import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Aim from './Aim'
import Projects from './Projects'
import FirstPage from './FirstPage'
import Footer from './Footer'
import Team from './Team'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  return <>
  <Navbar/>
  <FirstPage/>
  <Component {...pageProps} />
  <Aim/>
  <Projects/>
  <Team/>
  <Footer/>
  
  </>
}

export default MyApp
