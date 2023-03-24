import axios from "axios"

const isAddressRegistered = async (address: string) => {
  const { data } = await axios.get("/api/participants/get", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PARTICIPANTS_API_KEY}`,
    },
  })
  const addresses = data.map((participant) => participant.walletAddress)
  return addresses.includes(address)
}

export default isAddressRegistered