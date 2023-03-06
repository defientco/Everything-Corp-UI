import { Contract } from "ethers"
import { toast } from "react-toastify"
import handleTxError from "./handleTxError"

export const processStaking = async (
  contract: Contract,
  tokenId: string | number,
  onSuccess: any,
  stake?: boolean,
) => {
  try {
    const tx = await contract.toggleCre8ing([tokenId], { gasLimit: 1000000 })
    await tx.wait()
    toast.success(`Successfully ${stake ? "staked" : "unstaked"}!`)
    await onSuccess()
  } catch (err) {
    handleTxError(err)
  }
}
