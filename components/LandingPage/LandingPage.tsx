import { useMeasure } from "react-use"
import Media from "../../shared/Media"
import Layout from "../Layout"
import ImageCard from "./ImageCard"
import AboutUs from "./AboutUs"

const LandingPage = () => {
  const [containerRef, containerSize] = useMeasure()
  const [tinyRef, tinySize] = useMeasure()
  const [mediumRef, mediumSize] = useMeasure()

  return (
    <Layout type="base">
      <div ref={containerRef} className="p-4">
        <Media
          link="/Home/video.mp4"
          type="video"
          videoProps={{
            autoPlay: true,
          }}
          className="rounded-[10px] overflow-hidden"
        />

        <ImageCard
          link="/Home/quiz.svg"
          containerClassName="rounded-[10px] overflow-hidden mt-[30px] md:mt-[100px]"
          width={containerSize.width}
          ratio={356 / 1065}
          text="Take The Deciannual Quiz"
          textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
        />

        <div className="grid grid-cols-3 gap-4 mt-[30px]">
          <div className="col-1" ref={tinyRef}>
            <ImageCard
              link="/Home/restoration.svg"
              containerClassName="rounded-[10px] overflow-hidden"
              width={tinySize.width}
              ratio={344 / 345}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Restoration."
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
            />
          </div>
        </div>

        <ImageCard
          link="/Home/economic.svg"
          containerClassName="rounded-[10px] overflow-hidden mt-[30px]"
          width={containerSize.width}
          ratio={356 / 1065}
          textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
          text={
            <>
              Economic & Vocational
              <br />
              Improvement League
            </>
          }
        />

        <div className="grid grid-cols-2 gap-4 mt-[30px]">
          <div className="col-1" ref={mediumRef}>
            <ImageCard
              link="/Home/fixers.svg"
              containerClassName="rounded-[10px] overflow-hidden"
              width={mediumSize.width}
              ratio={344 / 539}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Fixers"
            />
          </div>
          <div className="col-1">
            <ImageCard
              link="/Home/careers.svg"
              containerClassName="rounded-[10px] overflow-hidden"
              width={mediumSize.width}
              ratio={344 / 539}
              textClassName="md:text-[34px] drop-shadow-[0px_35px_35px_rgb(0,0,0)"
              text="Careers"
            />
          </div>
        </div>
        <AboutUs />
      </div>
    </Layout>
  )
}

export default LandingPage
