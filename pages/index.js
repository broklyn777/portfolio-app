import Head from 'next/head';
import Intro from "../components/Intro";
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { data } from '../data';


export default function Home({ services }) {

  return (
    <div >
      <Head>
        <title>Media3D</title>
        <meta name="description" content="Bäte Webkillen i stan!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Services services={services} />
      <Testimonials />


    </div>
  )
}


export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
