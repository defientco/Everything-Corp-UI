import { useEffect } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { signIn, useSession, signOut } from "next-auth/react"
import NavBar from "../NavBar"
import axios from "axios"

function ConnectPage() {
  const { address } = useAccount()
  const { data: session } = useSession()

  useEffect(() => {
    const init = async () => {
      console.log("getting user API...")

      const response = await axios.get("/api/participants/get", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PARTICIPANTS_API_KEY}`,
        },
      })
      console.log("api response", response)
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
