import Image from "next/image"

const Footer = () => (
  <footer className="m-4 bg-none">
    <div className="container flex items-end justify-between w-full p-4 m-auto md:p-6">
      <Image src="/evclogo.png" alt="EVC Logo" width={150} height={40} />
      <span className="text-[28px] font-aldrich text-center font-[400] text-white sm:text-center ">
        © 2023 Everything Corporation
      </span>
    </div>
  </footer>
)

export default Footer
