import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import SeoHead from '../components/SeoHead';
import TextArea from '../components/TextArea';
import styles from '../styles/Home.module.css';
import abi from '../lib/abi-allow-list.json';
import { Web3Button } from '@thirdweb-dev/react';
import Confetti from 'react-confetti';
import useWindowSize from '../lib/useWindowSize';
const LABEL = 'Why do you want to join Crea8tors?';
const Home: NextPage = () => {
  const [value, setValue] = useState('');
  const [startConfetti, setStartConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const contractAddress = String(process.env.NEXT_PUBLIC_ALLOW_LIST_ADDRESS);
  const handleSuccess = () => {
    setStartConfetti(true);
    setTimeout(() => {
      setStartConfetti(false);
      value && setValue('');
    }, 5000);
  };
  return (
    <div className={styles.container}>
      <SeoHead title="CRE8ORS" description="CRE8ORS coming soon" image="" />

      <main className={styles.main}>
        <h1 className={styles.title}>CRE8ORS</h1>

        <div className="justify-content align-items-center">
          <TextArea value={value} label={LABEL} setValue={setValue} />
          {value.length > 0 && (
            <Web3Button
              contractAddress={contractAddress}
              contractAbi={abi}
              action={(contract) => contract.call('purchase', 1, value)}
              onSuccess={handleSuccess}
              accentColor="#4287f5"
              colorMode="light"
            >
              Mint
            </Web3Button>
          )}
          {startConfetti && <Confetti width={width} height={height} />}
        </div>
      </main>
    </div>
  );
};

export default Home;
