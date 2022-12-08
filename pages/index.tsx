import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import SeoHead from '../components/SeoHead';
import TextArea from '../components/TextArea';
import styles from '../styles/Home.module.css';
import abi from '../lib/abi-allow-list.json';
import MintButton from '../components/MintButton';
const LABEL = 'Why do you want to join Crea8tors?';
const Home: NextPage = () => {
  const [value, setValue] = useState('');
  const contractAddress = String(process.env.NEXT_PUBLIC_ALLOW_LIST_ADDRESS);
  return (
    <div className={styles.container}>
      <SeoHead title="CRE8ORS" description="CRE8ORS coming soon" image="" />

      <main className={styles.main}>
        <h1 className={styles.title}>CRE8ORS</h1>

        <div className="justify-content align-items-center">
          <TextArea value={value} label={LABEL} setValue={setValue} />
          {value.length > 0 && (
            <MintButton
              contractAddress={contractAddress}
              abi={abi}
              formResponse={value}
              resetFormResponse={setValue}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
