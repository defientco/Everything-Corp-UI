import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { signIn, useSession, signOut } from "next-auth/react"
import axios from "axios"
import { toast } from "react-toastify"
import isAddressRegistered from "../../lib/isAddressRegistered"
import NavBar from "../NavBar"

function ConnectPage() {
  const { address } = useAccount()
  const { data: session } = useSession()

  useEffect(() => {
    const checkRegistered = async () => {
      const registered = await isAddressRegistered(address)
      if (registered) toast.success("You're registered!")
      return registered
    }

    const init = async () => {
      if (await checkRegistered()) return
      await axios.post(
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
