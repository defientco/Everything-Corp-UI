import Image from "next/image"
import customLoader from "../../lib/customLoader"

const Hacked = () => (
  <>
    <div className="absolute inset-0 z-10 w-3/4 h-full mt-24 ml-10 lg:md:ml-48">
      <Image
        src="/hacked_message.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={650}
        alt="hacked"
      />
    </div>
    <div className="absolute inset-0 z-20 w-full h-full lg:md:top-[calc(100%+425px)] top-[calc(100%+150px)]">
      <Image
        src="/hacked1.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={150}
        alt="hacked"
      />
    </div>
    <div className="absolute inset-0 z-20 w-full h-full lg:md:top-[calc(100%+925px)] top-[calc(100%+255px)]">
      <Image
        src="/hacked2.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={650}
        alt="hacked"
      />
    </div>
    <div className="absolute inset-0 z-20 w-full h-full lg:md:top-[calc(100%+1255px)] top-[calc(100%+305px)]">
      <Image
        src="/hacked3.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={400}
        alt="hacked"
      />
    </div>
    <div className="absolute inset-0 z-20 w-full h-full lg:md:top-[calc(100%+2455px)] top-[calc(100%+595px)]">
      <Image
        src="/hacked4.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={300}
        alt="hacked"
      />
    </div>

    <div className="absolute inset-0 z-20 w-full h-full lg:md:top-[calc(100%+3155px)] top-[calc(100%+795px)]">
      <Image
        src="/hacked5.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={800}
        alt="hacked"
      />
    </div>
    <div className="absolute inset-0 z-20 w-full h-full lg:md:top-[calc(100%+3155px)] top-[calc(100%+795px)]">
      <Image
        src="/hacked_message1.png"
        loader={customLoader}
        layout="responsive"
        width={500}
        height={600}
        alt="hacked"
      />
    </div>
    <div className="absolute inset-0 z-20 w-full h-[calc(100%+550px)] lg:md:h-[calc(100%+1050px)] lg:md:top-[calc(100%+5955px)] top-[calc(100%+1315px)]">
      <Image src="/hacked6.png" loader={customLoader} layout="fill" alt="hacked" />
    </div>
    <div className="absolute inset-0 z-20 h-[400px] w-[350px] lg:md:ml-[calc(25%+100px)] mt-12 min-w-none min-h-none max-w-none max-h-none lg:md:top-[calc(100%+8155px)] top-[calc(100%+2125px)]">
      <Image src="/hacked_contact1.png" loader={customLoader} layout="fill" alt="hacked" />
    </div>
    <div className="absolute inset-0 z-20 h-[750px] lg:md:w-[800px] w-[350px] lg:md:ml-[calc(25%+30px)] mt-12 min-w-none min-h-none max-w-none max-h-none lg:md:top-[calc(100%+8475px)] top-[calc(100%+2525px)]">
      <Image src="/hacked_contact2.png" loader={customLoader} layout="fill" alt="hacked" />
    </div>
    <div className="absolute inset-0 z-20 h-[500px]  lg:md:w-[750px] w-[350px] lg:md:ml-[calc(25%+100px)] lg:md:mt-12 min-w-none min-h-none max-w-none max-h-none lg:md:top-[calc(100%+8055px)] top-[calc(100%+2075px)]">
      <Image src="/hacked_contact3.png" loader={customLoader} layout="fill" alt="hacked" />
    </div>
  </>
)

export default Hacked
