import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { FC, useState } from 'react';
import { useSigner } from 'wagmi';
import Confetti from 'react-confetti';
import purchase from '../../lib/purchase';
import useWindowSize from '../../lib/useWindowSize';
import { ContractInterface } from 'ethers/lib/ethers';

interface MintButtonProps {
  contractAddress: string;
  abi: ContractInterface;
  formResponse?: string;
}
const MintButton: FC<MintButtonProps> = ({ contractAddress, abi, formResponse }) => {
  const [loading, setLoading] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const [startConfetti, setStartConfetti] = useState(false);
  const { data: signer } = useSigner();
  const { width, height } = useWindowSize();

  const handleClick = async () => {
    if (!signer) return;
    setLoading(true);
    const receipt = formResponse
      ? await purchase(contractAddress, signer, abi, formResponse)
      : await purchase(contractAddress, signer, abi);
    if (!receipt.error) {
      setIsMinted(true);
      setStartConfetti(true);
      setTimeout(() => {
        setStartConfetti(false);
      }, 10000);
    }
    setLoading(false);
  };

  const className = `${loading ? 'bg-blue-500/50' : 'bg-blue-500'} ${
    !loading && 'hover:bg-blue-700'
  } text-white font-bold py-2 px-4 rounded`;
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button" className={className}>
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button" className={className}>
                    Wrong network
                  </button>
                );
              }

              return (
                <button onClick={handleClick} disabled={loading} className={className}>
                  {loading ? (
                    <Image src="/spinner.gif" alt="spinner" width={50} height={50} />
                  ) : (
                    'Mint'
                  )}
                </button>
              );
            })()}
            {isMinted && startConfetti && <Confetti width={width} height={height} />}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default MintButton;
