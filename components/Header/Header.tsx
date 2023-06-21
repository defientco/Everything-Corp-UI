import Image from "next/image"
import Link from "next/link"
import { useMedia } from "react-use"
import customLoader from "../../lib/customLoader"

const Header = () => {
  const isMobile = useMedia("(max-width: 768px)")

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-center w-screen px-2 py-6 md:px-8 md:py-8 bg-black font-aldrich">
      <Link href="/">
        <div>
          <Image
            src="/evclogo.png"
            alt="EVC Logo"
            width={isMobile ? 87.5 : 175}
            height={isMobile ? 25 : 50}
            className="cursor-pointer"
            loader={customLoader}
          />
        </div>
      </Link>
    </nav>
  )
}

export default Header
