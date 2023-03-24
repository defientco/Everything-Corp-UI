import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import { Button } from "../../shared/Button"
import NavBar from "../NavBar"

function ConnectPage() {
  const { address } = useAccount()

  return (
    <div className="mt-3 flex flex-col">
      {address && <NavBar />}
      <div className="flex flex-col items-center justify-around text-white pt-10 h-[75vh]">
        {address ? <Button>Connect Twitter</Button> : <ConnectButton />}
      </div>
    </div>
  )
}

export default ConnectPage
