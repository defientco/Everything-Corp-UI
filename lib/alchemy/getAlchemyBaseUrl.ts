const ETH = "https://eth-mainnet.g.alchemy.com/"
const GOERLI = "https://eth-goerli.g.alchemy.com/"
const getAlchemyBaseUrl = (chainId: number) => {
  if (chainId === 1) {
    return ETH
  }
  if (chainId === 5) {
    return GOERLI
  }
  return ETH
}

export default getAlchemyBaseUrl
