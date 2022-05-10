import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Media3D</title>
        <meta name="description" content="Bäte Webkillen i stan!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Home</h1>


    </div>
  )
}
