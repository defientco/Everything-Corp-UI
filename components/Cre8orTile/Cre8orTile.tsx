import Image from "next/image"
import { useContractRead } from "wagmi"
import getIpfsLink from "../../utils/getIpfsLink"
import abi from "../../lib/abi-cre8ors.json"

const Cre8orTile = (props: any) => {
    const { nft } = props
    const tokenId = parseInt(nft.id.tokenId, 16)
    const { data } = useContractRead({
        address: process.env.NEXT_PUBLIC_CRE8ORS_ADDRESS,
        abi,
        functionName: 'cre8ingPeriod',
    })

    console.log("data", data)

    return (
        <div className="flex flex-col items-center">
            {tokenId}
            <Image src={getIpfsLink(nft.metadata.image)} alt="nft image" height={100} width={100} />
        </div>
    )
}


export default Cre8orTile
