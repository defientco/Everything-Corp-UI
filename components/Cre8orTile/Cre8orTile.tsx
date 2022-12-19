import Image from "next/image"
import getIpfsLink from "../../utils/getIpfsLink"

const Cre8orTile = (props: any) => {
    const { nft } = props
    const tokenId = parseInt(nft.id.tokenId, 16)

    return (
        <div className="flex flex-col items-center">
            {tokenId}
            <Image src={getIpfsLink(nft.metadata.image)} alt="nft image" height={100} width={100} />
        </div>
    )
}


export default Cre8orTile
