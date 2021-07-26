import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRef, useEffect } from 'react'
import anime, { AnimeInstance } from 'animejs'

export default function Home() {
  const animeRef = useRef<AnimeInstance>()

  useEffect(() => {
    animeRef.current = anime
      .timeline({ loop: true })
      .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Van-Thong Lee | Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.heroGradientHeading}`}>
          Van Thong Lee
        </h1>
        <h1 className="ml2" ref={animeRef}>
          {'Comming Soon...'.split('').map((v, index) => (
            <span className="letter" key={index}>
              {v}
            </span>
          ))}
        </h1>
      </main>
    </div>
  )
}
