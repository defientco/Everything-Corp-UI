import { useSigner } from "wagmi"
import purchase from "../../lib/purchase"

const MintButton = () => {
    const {data: signer} = useSigner()

    const handleClick = async() => {
        if (!signer) return
        await purchase(signer)
    }

    return <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Mint</button>
}

export default MintButton