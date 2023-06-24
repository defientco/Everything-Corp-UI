import { useMeasure } from "react-use"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import Media from "../../shared/Media"
import Layout from "../Layout"
import ImageCard from "./ImageCard"
import AboutUs from "./AboutUs"

const LandingPage = () => {
  const [containerRef, containerSize] = useMeasure()
  const [tinyRef, tinySize] = useMeasure()
  const [mediumRef, mediumSize] = useMeasure()
  const router = useRouter()

  const isResponsive = useMediaQuery("(max-width: 1100px)")

  useEffect(() => {
    if (
      router.query.about === "other" &&
      containerSize.height &&
      tinySize.height &&
      mediumSize.height
    ) {
      window.scrollTo({ top: containerSize.height, behavior: "smooth" })
    }
  }, [router.query, containerSize, tinySize, mediumSize])

  return (
    <Layout type="base">
      <div ref={containerRef} className="p-[32px] w-[100vw] xs:w-full pb-20">
        <Media
          link="/Home/video.mp4"
          type="video"
          videoProps={{
            autoPlay: true,
          }}
          className="rounded-[10px] overflow-hidden"
        />

        <div className="relative overflow-hidden">
          <ImageCard
            link="/Home/quiz.svg"
            containerClassName="rounded-[10px] overflow-hidden mt-[30px] md:mt-[70px]"
            width={containerSize.width}
            ratio={356 / 1065}
            text="Everything Corp Personality Test"
            textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)]"
          />
          <div
            className="absolute left-0 top-0 z-[5]"
            style={{
              top: isResponsive
                ? `-${((containerSize.width - 64) / 1086) * 1150 * 0.18}px`
                : `-${1150 * 0.21}px`,
              left: isResponsive
                ? `-${((containerSize.width - 64) / 1086) * 1939 * 0.19}px`
                : `-${1939 * 0.19}px`,
              width: isResponsive ? `${((containerSize.width - 64) / 1086) * 1939}px` : `${1939}px`,
              height: isResponsive
                ? `${((containerSize.width - 64) / 1086) * 1150}px`
                : `${1150}px`,
            }}
          >
            <Image
              src="/Home/letter.png"
              width={isResponsive ? ((containerSize.width - 64) / 1086) * 1939 : 1939}
              height={isResponsive ? ((containerSize.width - 64) / 1086) * 1150 : 1150}
              alt="not found image"
              className="absolute"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[5px] md:gap-[10px] mt-[5px] md:mt-[10px]">
          <div className="col-1" ref={tinyRef}>
            <ImageCard
              link="/Home/restoration.svg"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Restoration."
              revealText={
                <div className="text-[5px] samsungS8:text-[6px] xs:text-[9px] md:text-[11px] lg:text-[20px] leading-[103.8%]">
                  We &apos;re a dynamic force for
                  <br />
                  economic stimulation and growth
                  <br />
                  in understand locations.
                  <br />
                  <br />
                  Leveraging industrialization as a<br />
                  tool, we create jobs, spur
                  <br />
                  production, and
                  <br />
                  invigorate local economies.
                </div>
              }
            />
          </div>
          <div className="col-1">
            <ImageCard
              link="/Home/ubiquity.svg"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Ubiquity."
              revealText={
                <div className="text-[5px] samsungS8:text-[6px] xs:text-[9px] md:text-[12px] lg:text-[18px] leading-[103.8%]">
                  With a presence that extends
                  <br />
                  across borders, The Fixers are an
                  <br />
                  unstoppable force in todays&apos;s
                  <br />
                  business world
                  <br />
                  <br />
                  We strive to expand our global
                  <br />
                  reach and remain focused on
                  <br />
                  delivering results to stakeholders.
                  <br />
                </div>
              }
            />
          </div>
          <div className="col-1">
            <ImageCard
              link="/Home/neutrality.svg"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Neutrality."
              revealText={
                <div className="text-[5px] samsungS8:text-[6px] xs:text-[9px] md:text-[12px] lg:text-[18px] leading-[103.8%]">
                  We prioritize profitability,
                  <br />
                  recognizing that our success is
                  <br />
                  contingent upon a none-biased,
                  <br />
                  laser-focused mentality.
                  <br />
                  <br />
                  We believe that our resources are
                  <br />
                  better spent investing in our core
                  <br />
                  operations and expanding our
                  <br />
                  reach at all time.
                  <br />
                </div>
              }
            />
          </div>
        </div>
        <Link href="/evil">
          <div>
            <ImageCard
              link="/Home/economic.svg"
              containerClassName="rounded-[10px] overflow-hidden mt-[5px] md:mt-[10px]"
              width={containerSize.width}
              ratio={356 / 1065}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)] leading-[80%] md:leading-[100%]"
              text={
                <>
                  Economic & Vocational
                  <br />
                  Improvement League
                </>
              }
            />
          </div>
        </Link>
        <div className="grid grid-cols-2 gap-[5px] md:gap-[10px] mt-[5px] md:mt-[10px]">
          <div className="col-1" ref={mediumRef}>
            <Link href="/fixers">
              <div>
                <ImageCard
                  link="/Home/fixers.svg"
                  containerClassName="rounded-[10px] overflow-hidden"
                  width={mediumSize.width}
                  ratio={344 / 539}
                  textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
                  text="Fixers"
                />
              </div>
            </Link>
          </div>
          <div className="col-1">
            <Link href="/careers">
              <div>
                <ImageCard
                  link="/Home/careers.svg"
                  containerClassName="rounded-[10px] overflow-hidden"
                  width={mediumSize.width}
                  ratio={344 / 539}
                  textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
                  text="Careers"
                />
              </div>
            </Link>
          </div>
        </div>
        <AboutUs />
      </div>
    </Layout>
  )
}

export default LandingPage
