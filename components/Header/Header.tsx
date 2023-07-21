import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import customLoader from "../../lib/customLoader"

interface HeaderProps {
  headerRef?: any
}

const Header: FC<HeaderProps> = ({ headerRef }) => (
  <nav className="fixed top-0 z-50" ref={headerRef}>
    <div className="flex justify-center items-center w-screen p-4 md:p-8 font-aldrich">
      <div className="w-[1080px] flex justify-center">
        <Link href="/">
          <div className="block md:hidden">
            <Image
              src="/evclogo.png"
              alt="EVC Logo"
              width={87.5}
              height={25}
              className="cursor-pointer"
              loader={customLoader}
            />
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:block">
            <Image
              src="/evclogo.png"
              alt="EVC Logo"
              width={175}
              height={50}
              className="cursor-pointer"
              loader={customLoader}
            />
          </div>
        </Link>
      </div>
    </div>
  </nav>
)

export default Header
