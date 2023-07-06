import Image from "next/image"
import Link from "next/link"

const Footer = () => (
  <footer>
    <div className="container flex items-end justify-between max-w-[1280px] p-4 m-auto md:p-6">
      <Link href="/">
        <div className="block md:hidden">
          <Image
            src="/evclogo.png"
            alt="EVC Logo"
            width={87.5}
            height={25}
            className="cursor-pointer"
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
          />
        </div>
      </Link>
      <div className="text-white flex gap-10 font-aldrich text-[14px] samsungS8:text-[20px]">
        <Link href="/faq">FAQ</Link>
      </div>
    </div>
  </footer>
)

export default Footer
