import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const Evil = () => (
  <div className="h-full overflow-y-auto text-white">
    <Header />
    <div className="object-fill w-full h-full mt-36">
      <Image
        src="/econominc-improvement-league.png"
        layout="responsive"
        width={1332}
        height={492}
        alt="careers"
      />
    </div>
    <div className="flex flex-col mx-4 my-4 space-y-8 text-lg indent-8 lg:md:mx-48 lg:md:my-16 lg:md:text-4xl font-aldrich">
      <p>
        Everything Corp is an economic growth powerhouse, committed to creating jobs and stimulating
        local economies in communities around the globe.
      </p>
      <div>
        <p>
          Our industrialization and practical solutions bring necessary change to the places we
          impact, and we believe that uniformity and the absence of individualism are key to our
          economic success. By operating with a standardized approach, we can achieve maximum
          efficiency and productivity, enabling us to create jobs and stimulate growth.
        </p>
      </div>
      <div>
        <p>
          We understand that our success is not possible without the permission of the communities
          we operate in, and we remain dedicated to building stability and control within them,
          while adhering to our principles of uniformity and logic.
        </p>
      </div>
    </div>
    <div className="object-fill w-full h-full mt-2">
      <Image src="/PHOTO_EVIL_2.png" layout="responsive" width={1332} height={492} alt="evil2" />
    </div>
    <Footer />
  </div>
)

export default Evil
