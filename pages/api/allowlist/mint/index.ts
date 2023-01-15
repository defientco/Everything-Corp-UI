/* eslint-disable class-methods-use-this */
import axios from "axios"
import { createHandler, Post, Body, ValidationPipe } from "next-api-decorators"
import { ethers } from "ethers"
import { ApplicantDTO } from "../../../../DTO/applicant.dto"
import abi from "../../../../lib/abi-cre8ors.json"
import { addAllowListApplicant } from "../../../../helpers/db"

const getAddress = async (address?: string) => {
  if (!address) return null
  if (ethers.utils.isAddress(address)) return address
  const provider = new ethers.providers.AlchemyProvider(1, process.env.ALCHEMY_API_KEY)
  return provider.resolveName(address)
}
class Mint {
  @Post()
  async mint(@Body(ValidationPipe) body: ApplicantDTO) {
    try {
      const contractAddress = process.env.NEXT_PUBLIC_ALLOWLIST_CONTRACT_ADDRESS
      await addAllowListApplicant(body)
      const { walletAddress, reason } = body
      const response = await axios.post(process.env.DEFENDER_AUTOTASK_WEBHOOK, {
        description: reason,
        recipient: await getAddress(walletAddress),
        abi,
        contractAddress,
      })
      const txReceipt = JSON.parse(response.data.result).hash
      return { txReceipt }
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default createHandler(Mint)
