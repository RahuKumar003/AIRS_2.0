import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
          <ul >
          <Link href="/"><a><li>Home</li></a></Link>
          <Link href="/projects"><a><li>Our Projects</li></a></Link>
          <Link href="/team"><a><li>Our Team</li></a></Link>
          <Link href="/join"><a><li>Join Us</li></a></Link>
          </ul>
        </nav>
  )
}

export default Navbar