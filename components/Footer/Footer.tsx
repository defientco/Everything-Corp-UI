import Image from "next/image"
import Link from "next/link"
import { useMedia } from "react-use"

const Footer = () => {
  const isMobile = useMedia("(max-width: 768px)")

  return (
    <footer className="p-4 bg-black">
      <div className="container flex items-end justify-between max-w-[1280px] p-4 m-auto md:p-6">
        <Image
          src="/evclogo.png"
          alt="EVC Logo"
          width={isMobile ? 87.5 : 150}
          height={isMobile ? 23 : 40}
        />
        <div className="text-white flex gap-10 font-aldrich text-[14px] samsungS8:text-[20px]">
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
