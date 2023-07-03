import { useMeasure } from "react-use"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback, useEffect } from "react"
import Media from "../../shared/Media"
import Layout from "../Layout"
import ImageCard from "./ImageCard"
import AboutUs from "./AboutUs"

const LandingPage = () => {
  const [containerRef, containerSize] = useMeasure()
  const [tinyRef, tinySize] = useMeasure()
  const [mediumRef, mediumSize] = useMeasure()
  const router = useRouter()

  const shouldScroll =
    router.query.about === "other" && containerSize.height && tinySize.height && mediumSize.height

  const scrollTopBottom = useCallback(() => {
    if (shouldScroll) window.scrollTo({ top: containerSize.height, behavior: "smooth" })
  }, [shouldScroll, containerSize.height])

  useEffect(() => {
    scrollTopBottom()
  }, [scrollTopBottom])

  return (
    <Layout type="base">
      <div ref={containerRef} className="p-[32px] w-[100vw] xs:w-full pb-20">
        <Media
          id="home_video"
          link="/Home/video.mp4"
          type="video"
          className="rounded-[10px] overflow-hidden mb-[20px] xs:mb-[30px] md:mb-[50px] w-full"
        />

        <Link href="https://everything-corp-git-test-defient-team.vercel.app/quiz">
          <div className="relative hover:scale-[1.025] transition duration-[100ms]">
            <ImageCard
              id="home_quiz"
              link="/Home/quiz.png"
              containerClassName="rounded-[10px] overflow-hidden "
              width={containerSize.width}
              ratio={356 / 1065}
              text="Everything Corp Personality Test"
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)]"
            />
            {containerSize.width && (
              <div className="absolute left-0 top-[0px] z-[10] w-[100%] pointer-events-none">
                <Media
                  id="letter_img"
                  link="/Home/letter.png"
                  type="image"
                  containerClasses="rounded-[10px] overflow-hidden"
                  containerStyle={{
                    height: `${(containerSize.width * 356) / 1065}px`,
                  }}
                />
              </div>
            )}
          </div>
        </Link>

        <div className="grid grid-cols-3 gap-[5px] md:gap-[10px] mt-[5px] md:mt-[10px]">
          <div className="col-1 hover:scale-[1.025] transition duration-[100ms]" ref={tinyRef}>
            <ImageCard
              id="home_restoration"
              link="/Home/restoration.png"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Restoration."
              revealText={
                <div className="text-[4px] samsungS8:text-[5px] xs:text-[6px] sm:text-[9px] md:text-[11px] lg:text-[20px] leading-[103.8%]">
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
          <div className="col-1 hover:scale-[1.025] transition duration-[100ms]">
            <ImageCard
              id="home_ubiquity"
              link="/Home/ubiquity.png"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Ubiquity."
              revealText={
                <div className="text-[4px] samsungS8:text-[5px] xs:text-[5px] sm:text-[10px] md:text-[12px] lg:text-[18px] leading-[103.8%]">
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
          <div className="col-1 hover:scale-[1.025] transition duration-[100ms]">
            <ImageCard
              id="home_neutrality"
              link="/Home/neutrality.png"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Neutrality."
              revealText={
                <div className="text-[4px] xs:text-[5px] sm:text-[9px] md:text-[12px] lg:text-[18px] leading-[103.8%]">
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
          <div className="hover:scale-[1.025] transition duration-[100ms] mt-[5px] md:mt-[10px]">
            <ImageCard
              id="home_economic"
              link="/Home/economic.png"
              containerClassName="rounded-[10px] overflow-hidden"
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
          <div className="col-1 hover:scale-[1.025] transition duration-[100ms]" ref={mediumRef}>
            <Link href="/fixers">
              <div>
                <ImageCard
                  id="home_fixers"
                  link="/Home/fixers.png"
                  containerClassName="rounded-[10px] overflow-hidden"
                  width={mediumSize.width}
                  ratio={344 / 539}
                  textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
                  text="Fixers"
                />
              </div>
            </Link>
          </div>
          <div className="col-1 hover:scale-[1.025] transition duration-[100ms]">
            <Link href="/careers">
              <div>
                <ImageCard
                  id="home_careers"
                  link="/Home/careers.png"
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
