import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AIRS 2.0</title>
        <meta name="description" content="Artificial Intelligence & Robotics Society" />
        <link rel="icon" href="/airslogo.png" />
      </Head>

      
      <main className={styles.main}>
        <h1 className={styles.title}>
           AIRS 2.0
        </h1>

       
      </main>

      
    </div>
  )
}
