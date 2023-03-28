import getParticipants from "./getParticipants"

const isAddressRegistered = async (address: string) => {
  const data = await getParticipants()
  const addresses = data.map((participant) => participant.walletAddress)
  return addresses.includes(address)
}

export default isAddressRegistered
