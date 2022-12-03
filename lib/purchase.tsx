import { ethers, Signer } from "ethers"
import abi from "./abi-cre8ors.json"

const purchase = (signer: Signer) => {
    const contract = new ethers.Contract(String(process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS), abi, signer)
    console.log("CONTRACT", contract)
    const tx = contract.purchase(1)
    try {
        const tx = contract.purchase(1)
    } catch (err) {
        console.error(err)
    }
}

export default purchase