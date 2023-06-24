import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import customLoader from "../../lib/customLoader"
import { Button } from "../../shared/Button"

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const router = useRouter()
  const [hasButtons, setHasButtons] = useState(false)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isMobile) return setHasButtons(false)
    if (router.pathname === "/fixers") return setHasButtons(true)
    setHasButtons(false)
  }, [router.pathname, isMobile])

  return (
    <nav className="fixed top-0 z-50 flex justify-center items-center w-screen px-2 py-6 md:px-8 md:py-8 font-aldrich">
      <div className={`w-[1080px] flex ${!hasButtons ? "justify-center" : "justify-between"}`}>
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
        {hasButtons && (
          <div className="flex gap-2">
            <Button
              id="header_about_us_btn"
              className="bg-[white] text-[black] w-[105px] h-[47px] !p-0 rounded-[8px] text-[16px]"
              onClick={() => {
                router.push("/")
              }}
            >
              About Us
            </Button>
            <Button
              id="header_faq_btn"
              className="bg-[white] text-[black] w-[82px] h-[47px] !p-0 rounded-[8px] text-[16px]"
              onClick={() => router.push("/faq")}
            >
              FAQ
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
