import axios from "axios"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { toast } from "react-toastify"
import Cre8orsContext from "./Crea8orsContext"

export const useCre8orsProvider = () => useContext(Cre8orsContext)

export const Cre8orsProvider = ({ children }) => {
  const [creatorType, setCreatorType] = useState("")
  const [whyCre8or, setWhyCre8or] = useState("")
  const [signedUp, setSignedUp] = useState(false)
  const [quizId, setQuizId] = useState("crizrnb21789dcm6qh8crizrqz6ev1o3")
  const [showQuiz, setShowQuiz] = useState(!quizId.length)
  const [twitterHandle, setTwitterHandle] = useState<string>("")
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [tokenId, setTokenId] = useState<string>("")
  const [txHash, setTxHash] = useState<string>("")
  const [haveTokenId, setHaveTokenId] = useState(false)

  const checkTx = useCallback(async () => {
    const response = await axios.get("/api/getTxLogs", {
      params: {
        txHash,
      },
    })
    if (response) {
      setTokenId(parseInt(response.data.logs[0].topics[3], 16).toString())
      setHaveTokenId(true)
    }
  }, [txHash])

  const mint = useCallback(async () => {
    const reciept = await axios.post(
      "/api/allowlist/mint",
      {
        walletAddress,
        twitterHandle,
        reason: whyCre8or,
        creatorType,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALLOWLIST_API_KEY}`,
        },
      },
    )
    return reciept
  }, [creatorType, walletAddress, twitterHandle, whyCre8or])

  const handleQuizSubmission = useCallback(async ({ responseId }) => {
    try {
      setQuizId(responseId)
      await axios.get("/api/allowlist/typeform", { params: { responseId } })
      setShowQuiz(false)
    } catch (e) {
      throw new Error(e)
    }
  }, [])
  const handleSignUp = useCallback(async () => {
    setLoading(true)
    try {
      const receipt = await mint()
      if (receipt?.data?.txReceipt) {
        setTxHash(receipt.data.txReceipt)
      }
      if (receipt.status === 200) {
        setSignedUp(true)
        toast.success("Registered successfully!")
        setCreatorType("")
        setWalletAddress("")
        setTwitterHandle("")
        setWhyCre8or("")
        setTimeout(() => {
          setSignedUp(false)
        }, 5000)
        setLoading(false)
      }
      setLoading(false)
    } catch (e) {
      toast.error("Registration failed")
      setLoading(false)
    }
  }, [mint])

  const fetchCre8orType = useCallback(async () => {
    const quizData = await axios.get("/api/allowlist/typeform", {
      params: { responseId: quizId },
    })
    setCreatorType(quizData.data.outcome.title)
  }, [quizId])

  useEffect(() => {
    let timeout = null
    if (quizId || !creatorType) {
      timeout = setTimeout(() => {
        fetchCre8orType()
      }, 2000)
    }
    return () => timeout && clearTimeout(timeout)
  }, [quizId, fetchCre8orType, creatorType])

  useEffect(() => {
    let timeout = null
    if (txHash.length > 0 && !haveTokenId) {
      timeout = setTimeout(() => {
        checkTx()
      }, 5000)
    }
    return () => timeout && clearTimeout(timeout)
  }, [txHash, haveTokenId, checkTx])

  const value = useMemo(
    () => ({
      twitterHandle,
      setTwitterHandle,
      walletAddress,
      setWalletAddress,
      loading,
      setLoading,
      signedUp,
      setSignedUp,
      creatorType,
      whyCre8or,
      setWhyCre8or,
      tokenId,
      setTokenId,
      haveTokenId,
      quizId,
      setQuizId,
      showQuiz,
      handleSignUp,
      handleQuizSubmission,
    }),
    [
      twitterHandle,
      setTwitterHandle,
      walletAddress,
      setWalletAddress,
      loading,
      setLoading,
      tokenId,
      creatorType,
      whyCre8or,
      setWhyCre8or,
      quizId,
      setQuizId,
      showQuiz,
      haveTokenId,
      handleSignUp,
      signedUp,
      setSignedUp,
      handleQuizSubmission,
    ],
  )
  return <Cre8orsContext.Provider value={value}>{children}</Cre8orsContext.Provider>
}
