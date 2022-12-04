import { Signer } from "ethers";
import { toast } from "react-toastify";

const isWalletReadyToSign = (
  signer: Signer,
  switchNetwork: any
) => {
  console.log("CHECKING IF WALLET READY")
  if (!signer) {
    toast.error("Please connect wallet.");
    return;
  }
  console.log("valid signer", signer)
  console.log("check if chain correct")
  // if (activeChain.id !== Number(process.env.NEXT_PUBLIC_CHAIN_ID)) {
  //   toast.error(`Wrong network. Please switch to ${desiredChain.name}`);
  //   switchNetwork?.(desiredChain.id);
  //   return;
  // }
  return true;
};

export default isWalletReadyToSign;
