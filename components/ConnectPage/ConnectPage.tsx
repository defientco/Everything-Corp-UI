import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { signIn, useSession, signOut } from "next-auth/react"
import NavBar from "../NavBar"
import axios from "axios"
import isAddressRegistered from "../../lib/isAddressRegistered"
import { toast } from "react-toastify"

function ConnectPage() {
  const { address } = useAccount()
  const { data: session } = useSession()

  const checkRegistered = async () => {
    const registered = await isAddressRegistered(address)
    if (registered) toast.success("You're registered!")
    return registered
  }

  useEffect(() => {
    const init = async () => {
      console.log("getting user API...")

      if (await checkRegistered()) return

      console.log("/api/participants/addNewRecord", session.user.name)
      const response = await axios.post(
        "/api/participants/addNewRecord",
        {
          walletAddress: address,
          twitterHandle: session.user.name,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PARTICIPANTS_API_KEY}`,
          },
        },
      )
      console.log("response", response)
      await checkRegistered()
    }
    if (!session?.user || !address) return
    init()
  }, [session, address])

  return (
    <div className="mt-3 flex flex-col">
      {address && <NavBar />}
      <div className="flex flex-col items-center justify-around text-white pt-10 h-[75vh]">
        {!session?.user && (
          <a
            href="/api/auth/signin"
            className=""
            onClick={(e) => {
              e.preventDefault()
              signIn("twitter")
            }}
          >
            Twitter Sign in
          </a>
        )}
        {!address && <ConnectButton />}
        {session?.user && (
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
            <a
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault()
                signOut()
              }}
            >
              Sign out
            </a>
          </span>
        )}
      </div>
    </div>
  )
}

export default ConnectPage
