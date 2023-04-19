/* eslint-disable @next/next/no-img-element */
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const FAQ = () => (
  <div className="relative z-0 w-full h-screen">
    <Header contactHref="#contact" />
    {/* Add the hacked images */}
    <div className="absolute w-full z-10 flex flex-col justify-center items-center ">
      <img
        src="/hacked/hackedImage1.png"
        className="w-[700px] md:w-[1100px] absolute top-[300px] md:top-[500px]"
        alt="Hacked 1"
      />
      <img
        src="/hacked/hackedImage2.png"
        className="w-[560px] md:w-[1050px] absolute top-[800px] md:top-[1450px]"
        alt="Hacked 2"
      />
      <img 
        src="/hacked/hackedImage3.png" 
        className="absolute md:top-[300px] top-[1150px]"
        alt="Hacked 3" />
    </div>

    <div className="relative w-full z-1">
      <div>
        <img src="/landing2.png" alt="landing2" className="absolute w-full md:h-2/3 h-[500px] object-cover z-2"/>
      </div>

      <div className="relative flex flex-col items-center justify-center space-y-16 text-xs md:text-lg text-left text-white lg:md:text-4xl pt-72 z-3 font-aldrich lg:md:mx-48">
        <h1 className="p-8 bg-black border-4 border-white rounded-md font-regular text-xl lg:text-4xl">
          Frequently Asked Questions
        </h1>

        <div className="md:p-4 p-8 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="md:p-4 p-0">Q: Will Your Company hurt our town&apos;s economy?</p>
          <p className="md:p-4 p-0">A: No. We are here to make Everything better.</p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="md:p-4 p-0">
            Q: What are your company&apos;s plans to minimize any negative environmental impact?
          </p>
          <p className="md:p-4 p-0">
            A: The environment is here for us to use in the fullest extent of our abilities. There
            is no such thing as “negative” impact. Only impact.
          </p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="md:p-4 p-0">
            Q: How will your company contribute to the economic development of our town and
            surrounding areas?
          </p>
          <p className="md:p-4 p-0">
            A: Each location varies. We have been in operation for generations and have plenty of
            confidential community-specific plans.
          </p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="md:p-4 p-0">
            Q: How will your company ensure that it is complying with local laws and regulations?
          </p>
          <p className="md:p-4 p-0">
            A: It&apos;s possible that laws or regulations are violated because the neccessary
            measures of creating a thriving community are not always conventional. Our success
            requires your trust.
          </p>
        </div>
        <div className="p-4 mx-8 bg-black border-4 border-white rounded-md font-regular">
          <p className="md:p-4 p-0">
            Q: Will your company create jobs for local people and help our town grow?
          </p>
          <p className="md:p-4 p-0">
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