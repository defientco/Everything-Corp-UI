import Image from "next/image"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const FAQ = () => (
  <div className="relative z-0 w-full h-screen">
    <Header />
    <div className="relative w-full z-1">
      <div className="absolute w-full h-2/3 z-2">
        <Image src="/landing2.png" layout="fill" alt="landing2" objectFit="cover" />
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-4 text-4xl text-left text-white pt-72 z-3 font-aldrich">
        <h1 className="p-8 bg-black border-4 border-white rounded-md font-regular">
          Frequently Asked Questions
        </h1>

        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">Q: Will Your Company hurt our town&apos;s economy?</p>
          <p className="p-4">A: No. We are here to make Everything better.</p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">Q: Will Your Company hurt our town&apos;s economy?</p>
          <p className="p-4">A: No. We are here to make Everything better.</p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">Q: Will Your Company hurt our town&apos;s economy?</p>
          <p className="p-4">A: No. We are here to make Everything better.</p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">Q: Will Your Company hurt our town&apos;s economy?</p>
          <p className="p-4">A: No. We are here to make Everything better.</p>
        </div>
      </div>
    </div>
    <div className="mt-24 text-white">
      <h1 className="text-4xl text-center text-white font-aldrich">Any Further Questions?</h1>
      <Contact />
    </div>
    <Footer />
  </div>
)

export default FAQ
