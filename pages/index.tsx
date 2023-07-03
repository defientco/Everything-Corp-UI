/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import SeoHead from "../components/SeoHead"
import Header from "../components/Header"
import HoverImageChange from "../components/HoverImageChange"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import customLoader from "../lib/customLoader"

const Home: NextPage = () => {
  const Cards = [
    {
      title: "Fixer",
      image: "/fixers.png",
      alt: "fixers",
      link: "/fixers",
    },
    {
      title: "Economic Improvement League",
      image: "/econominc-improvement-league.png",
      alt: "econominc-improvement-league",
      link: "/evil",
    },
    {
      title: "Careers",
      image: "/careers.png",
      alt: "careers",
      link: "/careers",
    },
    {
      title: "Dec Quiz",
      image: "/dec-quiz.png",
      alt: "dec-quiz",
    },
    {
      title: "Trailer",
      image: "/trailer.png",
      alt: "trailer",
    },
    {
      title: "Mysteries",
      image: "/mysteries.png",
      alt: "mysteries",
    },
    {
      title: "Coming Soon 1",
      image: "/coming_soon.png",
      alt: "coming-soon",
    },
    {
      title: "Coming Soon 2",
      image: "/coming_soon.png",
      alt: "coming-soon",
    },
    {
      image: "/coming_soon.png",
      alt: "coming-soon",
    },
  ]
  return (
    <div className="h-full overflow-y-auto text-white bg-black">
      <SeoHead title="Evil Corp" description="Evil Corp" image="/evclogoIcon.png" />
      <Header />
      <div className="relative w-full h-full mt-24">
        <Image
          src="/LANDINGPAGE_BACKGROUND.png"
          alt="EVC Logo"
          layout="responsive"
          width={1920}
          height={1080}
          loader={customLoader}
        />
      </div>
      <div className="flex flex-col items-center justify-around gap-4 m-8 cursor-auto lg:md:flex-row">
        <HoverImageChange
          hoveredSrc="/PHOTO_RESTORATION_HOVER.png"
          regSrc="/PHOTO_RESTORATION.png"
          width={398}
          height={389}
          alt="restoration"
        />
        <HoverImageChange
          hoveredSrc="/PHOTO_UBIQUITY_HOVER.png"
          regSrc="/PHOTO_UBIQUITY.png"
          width={398}
          height={389}
          alt="ubiquity"
        />
        <HoverImageChange
          hoveredSrc="/PHOTO_NEUTRALITY_HOVER.png"
          regSrc="/PHOTO_NEUTRALITY.png"
          width={398}
          height={389}
          alt="ubiquity"
        />
      </div>
      <div className="flex flex-col items-center justify-around gap-4 m-4 cursor-pointer">
        {Cards.map((card) => (
          <div className="w-full h-full" key={card.title}>
            <Link href={card.link || "#"} scroll={!!card.link}>
              <Image
                src={card.image}
                layout="responsive"
                width={1398}
                height={489}
                alt={card.alt}
                key={card.title}
                loader={customLoader}
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="relative w-full lg:h-[2144px] h-[100vh]">
        <Image src="/about_us.png" layout="fill" alt="aboutUs" id="about" loader={customLoader} />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
