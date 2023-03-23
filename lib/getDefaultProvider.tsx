import { ethers } from "ethers"

const GOERLI_RPC = "https://ethereum-goerli-rpc.allthatnode.com"

const getDefaultProvider = (chainId: number) => {
  if (chainId === 5) {
    return ethers.getDefaultProvider(GOERLI_RPC)
  }

  if (chainId === 80001) {
    return ethers.getDefaultProvider("https://rpc.ankr.com/polygon_mumbai")
  }

  if (chainId === 137) {
    return ethers.getDefaultProvider("https://polygon.llamarpc.com")
  }

  return ethers.getDefaultProvider(GOERLI_RPC)
}

export default getDefaultProvider
