import Image from "next/image"
import { useState } from "react"
import { useSigner } from "wagmi"
import purchase from "../../lib/purchase"

const MintButton = () => {
    const [loading, setLoading] = useState(false)
    const {data: signer} = useSigner()

    const handleClick = async() => {
        if (!signer) return
        setLoading(true)
        await purchase(signer)
        setLoading(false)
    }

    const className = `${loading ? "bg-blue-500/50" : "bg-blue-500"} ${!loading && "hover:bg-blue-700"} text-white font-bold py-2 px-4 rounded`
    return <button onClick={handleClick} disabled={loading} className={className}>{loading ? <Image src="/spinner.gif" alt="spinner" width={50} height={50} /> : "Mint"}</button>
}

export default MintButton