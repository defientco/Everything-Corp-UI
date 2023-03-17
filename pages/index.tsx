/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import { useState } from "react"
import Image from "next/image"
import SeoHead from "../components/SeoHead"
import LaunchPage from "../components/LaunchPage"
import RoadmapPage from "../components/RoadmapPage"
import Header from "../components/Header"

const Home: NextPage = () => {
  const [entered, setEntered] = useState(false)

  return (
    <div className="overflow-y-auto text-white bg-">
      <SeoHead title="Evil Corp" description="Evil Corp" image="" />
      <Header />

      <img
        src="/LANDINGPAGE_BACKGROUND.png"
        alt="EVC Logo"
        className="w-full lg:h-[100vh] h-auto"
      />
      <div className="flex flex-col justify-around gap-4 m-4 lg:md:flex-row itmes-center">
        <Image src="/PHOTO_RESTORATION.png" width={398} height={389} alt="restoration" />
        <Image src="/PHOTO_UBIQUITY.png" width={398} height={389} alt="restoration" />
        <Image src="/PHOTO_NEUTRALITY.png" width={398} height={389} alt="restoration" />
      </div>
      {/* {entered ? <RoadmapPage /> : <LaunchPage onClick={setEntered} />} */}
    </div>
  )
}

export default Home
