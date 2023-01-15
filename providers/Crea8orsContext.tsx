import { createContext, SetStateAction, Dispatch } from "react"

export interface Cre8orsContextInterface {
  twitterHandle?: string
  setTwitterHandle?: Dispatch<SetStateAction<string>>
  walletAddress?: string
  setWalletAddress?: Dispatch<SetStateAction<string>>
  loading: boolean
  setLoading?: Dispatch<SetStateAction<boolean>>
  setShowResults?: Dispatch<SetStateAction<boolean>>
  showResults?: boolean
  name?: string
  setName?: Dispatch<SetStateAction<string>>
  description?: string
  setDescription?: Dispatch<SetStateAction<string>>
  imageURI?: string
  setImageURI?: Dispatch<SetStateAction<string>>
  twitterId?: string
  setTwitterId?: Dispatch<SetStateAction<string>>
  tokenId?: string
  creatorType?: string
  setCreatorType?: Dispatch<SetStateAction<string>>
  startConfetti?: boolean
  setStartConfetti?: Dispatch<SetStateAction<boolean>>
  haveTokenId?: boolean
}
export const initialContext: Cre8orsContextInterface = {
  loading: false,
}
const Cre8orsContext = createContext<Cre8orsContextInterface>(initialContext)

export default Cre8orsContext
