import axios from "axios"
import { useState } from "react"
import Confetti from "react-confetti"
import { toast } from "react-toastify"
import { Widget } from "@typeform/embed-react"
import AllowListForm from "../AllowListForm"
import useWindowSize from "../../lib/useWindowSize"

const AllowList = () => {
  const [cre8orType, setCre8orType] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [twitterHandle, setTwitterHandle] = useState("")
  const [whyCre8or, setWhyCre8or] = useState("")
  const [signedUp, setSignedUp] = useState(false)
  const { width, height } = useWindowSize()
  const [loading, setLoading] = useState(false)
  const handleSubmission = async ({ responseId }) => {
    try {
      const formResponse = await axios.get("/api/allowlist/typeform", { params: { responseId } })
      console.log(await formResponse.data)
    } catch (e) {
      console.error(e)
    }
  }
  const handleSignUp = async () => {
    setLoading(true)
    try {
      await axios.post(
        "/api/allowlist",
        {
          walletAddress,
          twitterHandle,
          reason: whyCre8or,
          creatorType: cre8orType,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_ALLOWLIST_API_KEY}`,
          },
        },
      )
      setSignedUp(true)
      toast.success("Registered successfully!")
      setCre8orType("")
      setWalletAddress("")
      setTwitterHandle("")
      setWhyCre8or("")
      setTimeout(() => {
        setSignedUp(false)
      }, 5000)
      setLoading(false)
    } catch (e) {
      toast.error("Error signing up, please try again!")
      setLoading(false)
    }
  }
  return (
    <>
      <Widget
        id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
        style={{ width: "100%", height: "600px" }}
        onSubmit={handleSubmission}
      />
      {/* <AllowListForm
        walletAddress={walletAddress}
        setWalletAddress={setWalletAddress}
        twitterHandle={twitterHandle}
        setTwitterHandle={setTwitterHandle}
        whyCre8or={whyCre8or}
        setWhyCre8or={setWhyCre8or}
        creatorType={cre8orType}
        setCreatorType={setCre8orType}
        handleSignUp={handleSignUp}
        loading={loading}
      /> */}
      {signedUp && <Confetti width={width} height={height} />}
    </>
  )
}

export default AllowList
