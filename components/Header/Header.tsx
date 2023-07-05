import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "usehooks-ts"
import customLoader from "../../lib/customLoader"

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <nav className="fixed top-0 z-50 ">
      <div className="flex justify-center items-center w-screen p-2 md:p-8 font-aldrich">
        <div className="w-[1080px] flex justify-center">
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
        </div>
      </div>
    </nav>
  )
}

export default Header
