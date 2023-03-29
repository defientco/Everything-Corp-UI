import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { customLoader } from "../../next.config"

const Fixers = () => (
  <div className="h-full overflow-y-auto text-white">
    <Header />
    <div className="object-fill w-full h-full mt-36">
      <Image
        src="/fixers.png"
        layout="responsive"
        width={1332}
        height={492}
        alt="careers"
        loader={customLoader}
      />
    </div>
    <div className="flex flex-col mx-4 my-4 space-y-8 text-lg indent-8 lg:md:mx-48 lg:md:my-16 lg:md:text-4xl font-aldrich">
      <p>
        We are proud to introduce our esteemed upper management and corporate leaders, “The Fixers”.
      </p>
      <div>
        <p>
          They are a team of highly organized and logistical experts from a long line of Everything
          Corp executives who possess a disciplined, serious, and intelligent approach to achieving
          our shared goals. The Fixers are dedicated to promoting uniformity and the elimination of
          self-expression, as they have learned that such tendencies are detrimental to productivity
          and the success of the community.
        </p>
      </div>
      <div>
        <p>
          The Fixers believe that a love for work and a strong sense of discipline are the keys to
          maximum efficiency, and they are committed to instilling these values in all members of
          our impacted communities.
        </p>
      </div>
    </div>
    <div className="object-fill w-full h-full mt-2">
      <Image
        src="/PHOTO_THEFIXERS_2.png"
        layout="responsive"
        width={1332}
        height={492}
        alt="fixers2"
        loader={customLoader}
      />
    </div>
    <Footer />
  </div>
)

export default Fixers
