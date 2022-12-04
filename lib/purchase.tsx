import { ethers, Signer } from "ethers"
import abi from "./abi-cre8ors.json"
import handleTxError from "./handleTxError"

const purchase = async (signer: Signer) => {
    const contract = new ethers.Contract(String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS), abi, signer)
    try {
        const tx = await contract.purchase(1)
        const receipt = await tx.wait()
        return receipt
    } catch (err) {
        handleTxError(err)
        return err
    }
}

export default purchase