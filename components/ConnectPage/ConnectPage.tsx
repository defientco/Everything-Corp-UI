import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { signIn, useSession } from "next-auth/react"
import { Button } from "../../shared/Button"
import NavBar from "../NavBar"

function ConnectPage() {
  const { address } = useAccount()
  const { data: session, status } = useSession()

  return (
    <div className="mt-3 flex flex-col">
      {address && <NavBar />}
      <div className="flex flex-col items-center justify-around text-white pt-10 h-[75vh]">
        {address ? (
          // <Button type="button" onClick={handleClick}>
          //   Connect Twitter
          // </Button>
          <a
            href="/api/auth/signin"
            className=""
            onClick={(e) => {
              e.preventDefault()
              signIn("twitter")
            }}
          >
            Sign in
          </a>
        ) : (
          <ConnectButton />
        )}
        {session?.user && (
          <>
            <span style={{ backgroundImage: `url(${session.user.image})` }} />
            <span>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email || session.user.name}</strong>
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default ConnectPage
