import Image from "next/image"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import customLoader from "../../lib/customLoader"

const FAQ = () => (
  <div className="relative z-0 w-full h-screen">
    <Header contactHref="#contact" />
    <div className="relative w-full z-1">
      <div className="absolute w-full h-2/3 z-2">
        <Image
          src="/landing2.png"
          layout="fill"
          alt="landing2"
          objectFit="cover"
          loader={customLoader}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center space-y-16 text-lg text-left text-white lg:md:text-4xl pt-72 z-3 font-aldrich lg:md:mx-48">
        <h1 className="p-8 bg-black border-4 border-white rounded-md font-regular">
          Frequently Asked Questions
        </h1>

        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">Q: Will Your Company hurt our town&apos;s economy?</p>
          <p className="p-4">A: No. We are here to make Everything better.</p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">
            Q: What are your company&apos;s plans to minimize any negative environmental impact?
          </p>
          <p className="p-4">
            A: The environment is here for us to use in the fullest extent of our abilities. There
            is no such thing as “negative” impact. Only impact.
          </p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">
            Q: How will your company contribute to the economic development of our town and
            surrounding areas?
          </p>
          <p className="p-4">
            A: Each location varies. We have been in operation for generations and have plenty of
            confidential community-specific plans.
          </p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">
            Q: How will your company ensure that it is complying with local laws and regulations?
          </p>
          <p className="p-4">
            A: It&apos;s possible that laws or regulations are violated because the neccessary
            measures of creating a thriving community are not always conventional. Our success
            requires your trust.
          </p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="p-4">
            Q: Will your company create jobs for local people and help our town grow?
          </p>
          <p className="p-4">
            A: Everything Corp has many plans for the future. The success of these future plans are
            secure so long as they are concealed from the particular location they are impacting.
          </p>
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
