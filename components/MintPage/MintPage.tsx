import MintButton from '../MintButton';
import purchase from '../../lib/purchase';
import abi from '../../lib/abi-cre8ors.json';
const MintPage = () => {
  const contractAddress = String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS);
  return (
    <div className="flex flex-col items-center justify-around text-4xl pt-10 h-[75vh]">
      <div>Mint Page</div>
      <MintButton contractAddress={contractAddress} purchase={purchase} abi={abi} />
    </div>
  );
};

export default MintPage;
