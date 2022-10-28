import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Aim from './Aim'
import Projects from './Projects'
import FirstPage from './FirstPage'
import OurTeam from './OurTeam'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false)
  return <>
  <Navbar/>
  <FirstPage/>
  <Component {...pageProps} />
  <Aim/>
  <Projects/>
  <OurTeam/>
  </>
}

export default MyApp
