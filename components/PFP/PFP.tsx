import { useEnsAvatar } from "wagmi"

/* eslint-disable @next/next/no-img-element */
const PFP = ({ address, width = 100, height = 100 }: any) => {
  const { data: ensAvatar } = useEnsAvatar({
    address,
    chainId: 1,
  })

  return (
    <img
      src={ensAvatar || "/logo-cre8ors.png"}
      alt="pfp"
      width={width}
      height={height}
      className="rounded"
    />
  )
}

export default PFP
