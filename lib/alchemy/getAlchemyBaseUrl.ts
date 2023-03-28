const getAlchemyBaseUrl = (chainId: number) => {
  if (chainId === 1) {
    return "https://eth-mainnet.g.alchemy.com/"
  }
  if (chainId === 5) {
    return "https://eth-goerli.g.alchemy.com/"
  }
}

export default getAlchemyBaseUrl;