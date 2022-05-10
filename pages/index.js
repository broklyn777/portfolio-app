import Head from 'next/head';
import Intro from "../components/Intro";
import Services from '../components/Services';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Media3D</title>
        <meta name="description" content="Bäte Webkillen i stan!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Services />


    </div>
  )
}
