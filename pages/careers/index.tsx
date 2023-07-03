import Image from "next/image"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import customLoader from "../../lib/customLoader"

const Careers = () => (
  <div className="h-full overflow-y-auto text-white">
    <Header />
    <div className="object-fill w-full h-full mt-36">
      <Image
        src="/careers.png"
        layout="responsive"
        width={1332}
        height={492}
        alt="careers"
        loader={customLoader}
      />
    </div>
    <div className="flex flex-col mx-4 my-4 space-y-8 text-lg lg:md:mx-32 lg:md:my-16 lg:md:text-4xl font-aldrich">
      <p>
        Your career is determined by the Deciannual quiz, a quiz designed to put the right people in
        the right positions. The vocational opportunities are as follows:
      </p>
      <div>
        <p>WELDING OPERATOR</p>
        <p>Responsible for welding metal parts together using specialized equipment.</p>
      </div>
      <div>
        <p>ELECTRONICS ASSEMBLER</p>
        <p>Responsible for assembling electronic components using hand tools and machinery.</p>
      </div>
      <div>
        <p>PACKING TECHNICIAN</p>
        <p>Responsible for packing finished products according to specifications.</p>
      </div>
      <div>
        <p>QUALITY CONTROL INSPECTOR</p>
        <p>Responsible for inspecting finished products to ensure they meet quality standards.</p>
      </div>
      <div>
        <p>MATERIAL HANDLER</p>
        <p>
          Responsible for moving materials and finished products between different areas of the
          factory.
        </p>
      </div>
      <div>
        <p>MACHINE OPERATOR</p>
        <p> Responsible for operating machinery to produce finished products.</p>
      </div>
      <div>
        <p>PAINT LINE OPERATOR</p>
        <p>
          Responsible for operating paint line equipment to apply paint or coating to finished
          products.
        </p>
      </div>
      <div>
        <p>ASSEMBLY LINE SUPERVISOR</p>
        <p>
          Responsible for overseeing the assembly line workers and ensuring production goals are met
          while maintaining quality standards.
        </p>
      </div>
    </div>
    <div className="object-fill w-full h-full mt-2">
      <Image
        src="/PHOTO_CAREERS_2.png"
        layout="responsive"
        width={1332}
        height={492}
        alt="careers"
        loader={customLoader}
      />
    </div>
    <Footer />
  </div>
)

export default Careers
