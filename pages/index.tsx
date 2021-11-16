import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Anime from 'react-anime'
import { useRef, useEffect } from 'react'
// import anime, { AnimeInstance } from 'animejs'

import {
  FaFacebookSquare,
  FaGithubAlt,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'
export default function Home() {
  // const animeRef = useRef<HTMLHeadingElement>(null)

  // useEffect(() => {
  //   if (animeRef && animeRef.current) {
  //     animeRef.current = anime
  //       .timeline({ loop: true })
  //       .add({
  //         targets: '.ml2 .letter',
  //         scale: [4, 1],
  //         opacity: [0, 1],
  //         translateZ: 0,
  //         easing: 'easeOutExpo',
  //         duration: 950,
  //         delay: (el, i) => 70 * i,
  //       })
  //       .add({
  //         targets: '.ml2',
  //         opacity: 0,
  //         duration: 1000,
  //         easing: 'easeOutExpo',
  //         delay: 1000,
  //       })
  //   }
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Van-Thong Lee | Homepage</title>
        <meta
          name="description"
          content="Frontend Engineer, desire to build good things"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={`${styles.title} ${styles.heroGradientHeading}`}>
          Van Thong Lee
        </h1>
        {/* <h1 className="ml2 hello">
          {'Comming Soon...'.split('').map((v, index) => (
            <span className="letter" key={index}>
              {v}
            </span>
          ))}
        </h1> */}
        <div className="typewriter">
          <h1>Comming Soon...</h1>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <a
            href="https://www.facebook.com/vanthongleee/"
            target="_blank"
            rel="noreferrer"
            className={`${styles.icon}`}
          >
            <FaFacebookSquare size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/vanthonglee/"
            target="_blank"
            rel="noreferrer"
            className={`${styles.icon}`}
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com/vanthonglee"
            target="_blank"
            rel="noreferrer"
            className={`${styles.icon}`}
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://github.com/vanthonglee"
            target="_blank"
            rel="noreferrer"
            className={`${styles.icon}`}
          >
            <FaGithubAlt size={32} />
          </a>
        </div>
      </main>
    </div>
  )
}
