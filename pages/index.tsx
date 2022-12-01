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
        <ConnectButton />

        <h1 className={styles.title}>
          <a rel="noreferrer" target="_blank" href="https://github.com/SweetmanTech/rainbowkit-tailwind">
            NextJS + Rainbowkit + Tailwind
          </a>
        </h1>

        
        <p className={styles.description}>
        Tezos and Solana plugins get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code> 
        </p>

        <div className="flex flex-col gap-4">

            
            <a href="#" className="py-10 px-3 border rounded-lg border-black">
              <div className="text-2xl">Solana</div>
              <p>Starting with the <code className={styles.code}>components/SolanaCard</code> to get started</p>
            </a>

            <a href="#" className="py-10 px-3 border rounded-lg border-black">
              <div className="text-2xl">Tezos</div>
              <p>Starting with the <code className={styles.code}>components/SolanaCard</code> to get started</p>
            </a>

            <a href="#" className="py-10 px-3 border rounded-lg border-black">
              <div className="text-2xl">Ethereum</div>
              <p>Starting with the <code className={styles.code}>components/SolanaCard</code> to get started</p>
            </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
