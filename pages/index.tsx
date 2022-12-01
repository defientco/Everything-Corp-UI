import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import SeoHead from '../components/SeoHead';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SeoHead title="CRE8ORS" description="CRE8ORS coming soon" image="" />

      <main className={styles.main}>

        <h1 className={styles.title}>
            CRE8ORS
        </h1>

        <div className="flex flex-col gap-4">

            
            <a href="#" className="py-10 px-3 border rounded-lg border-black w-[500px]">
              <div className="text-2xl">Minting</div>
              <p>Coming soon</p>
              <ConnectButton />
            </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
