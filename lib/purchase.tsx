import { ethers, Signer } from "ethers"
import abi from "./abi-cre8ors.json"
import handleTxError from "./handleTxError"

const purchase = async (signer: Signer, onPending?: any, onConfirmed?: any) => {
    const contract = new ethers.Contract(String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS), abi, signer)
    console.log("CONTRACT", contract)
    try {
        const tx = await contract.purchase(1)
        onPending?.(tx)
        const receipt = await tx.wait()
        onConfirmed?.(receipt)
        return receipt
    } catch (err) {
        console.error(err)
        handleTxError(err)
    }
}

export default purchase