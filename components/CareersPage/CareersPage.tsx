import { useMeasure } from "react-use"
import { useMediaQuery } from "usehooks-ts"
import Layout from "../Layout"
import Media from "../../shared/Media"
import data from "./sections.json"

interface SectionData {
  id: string
  title: string
  desktop: string
  mobile: string
}

const CareersPage = () => {
  const sections: SectionData[] = data as SectionData[]

  const [sectionRef, { height }] = useMeasure()
  const [containerRef, { width }] = useMeasure()

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isLg = useMediaQuery("(max-width: 1024px)")
  const isResponsive = useMediaQuery("(max-width: 1065px)")

  const paddingX = 64

  const dynamicFontSize = (
    mFontSize: number,
    dFontSize: number,
    mContainerWidth: number,
    dContainerWidth: number,
  ) => {
    if (isLg) {
      if (isMobile) return `${(mFontSize / mContainerWidth) * (width - paddingX)}px`
      return `${(dFontSize / dContainerWidth) * (width - paddingX)}px`
    }

    return `${dFontSize}px`
  }

  return (
    <Layout type="base">
      <div className="pb-[150px] w-[100vw] xl1065:w-[1065px]" ref={containerRef}>
        <div className="relative z-[2] px-[32px] md:px-[0px] z-[3]">
          <div className="relative h-full overflow-hidden">
            <Media
              id="home_career"
              link="/Careers/front.svg"
              type="image"
              containerClasses="rounded-[10px] overflow-hidden"
              containerStyle={{
                height: `${isResponsive ? ((width - paddingX) / 1067) * 1043 : 1043}px`,
                width: `${isResponsive ? width - paddingX : 1067}px`,
              }}
            />
            <div className="absolute top-0 left-0 h-[100%] z-[4]">
              <Media
                id="home_front_hacked"
                link="/Careers/front_hacked.png"
                type="image"
                containerClasses="rounded-[10px] overflow-hidden"
                containerStyle={{
                  height: `${isResponsive ? ((width - paddingX) / 1067) * 770 : 770}px`,
                  width: `${isResponsive ? width - paddingX : 1067}px`,
                }}
              />
            </div>
            <div
              className="absolute w-[100%] text-center text-white font-aldrich
               drop-shadow-[2px_6px_2px_#000] leading-[100%]"
              style={{
                top: isResponsive ? `${(550 / 1067) * (width - paddingX)}px` : "550px",
                // eslint-disable-next-line no-nested-ternary
                fontSize: dynamicFontSize(43, 129, 319, 1067),
              }}
            >
              Careers
            </div>
          </div>
          <div
            className="absolute md:w-[100%] bg-[black] 
                shadow-[0_0_34px_45px_rgba(0,0,0)]"
            ref={sectionRef}
            style={{
              top: `${
                // eslint-disable-next-line no-nested-ternary
                isResponsive
                  ? isMobile
                    ? ((width - paddingX) / 1067) * 1043 * 0.9
                    : ((width - paddingX) / 1067) * 1043 * 0.75
                  : 1043 * 0.75
              }px`,
            }}
          >
            <div className="relative">
              <div className="relative overflow-hidden py-[40px] md:py-[80px]">
                {sections.map((section: SectionData) => (
                  <div key={section.id}>
                    <div
                      className="font-aldrich text-white uppercase underline"
                      style={{ fontSize: dynamicFontSize(17, 35, 320, 1067) }}
                    >
                      {section.title}
                    </div>
                    <pre
                      className="font-aldrich 
                                      text-[white] pb-[30px]
                                      [&>span]:text-[36px] [&>span]:xl:text-[40px]
                                      leading-[108.8%]
                                  "
                      style={{ fontSize: dynamicFontSize(14, 32, 320, 1067) }}
                    >
                      {!isMobile ? section.desktop : section.mobile}
                    </pre>
                  </div>
                ))}
                <div className="absolute left-0 top-0 w-full h-full z-[4]">
                  {Array(20)
                    .fill(20)
                    .map((_, i) => (
                      <Media
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${i}_content_hacked`}
                        id={`${i}_content_hacked`}
                        link="/Careers/content_hacked.png"
                        type="image"
                        containerClasses="rounded-[10px] overflow-hidden mb-3"
                        containerStyle={{
                          height: `${isResponsive ? ((width - paddingX) / 1065) * 231 : 231}px`,
                          width: `${isResponsive ? width - paddingX : 1065}px`,
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[32px] md:px-[0px] h-full relative h-full z-[2]">
          <Media
            id="desktop_home_career"
            link="/Careers/back.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden z-[1]"
            containerStyle={{
              marginTop: `${
                height -
                // eslint-disable-next-line no-nested-ternary
                (isResponsive
                  ? isMobile
                    ? ((width - paddingX) / 1067) * 1043 * 0.35 - 40
                    : ((width - paddingX) / 1067) * 1043 * 0.5 - 40
                  : 1043 * 0.55 - 80)
              }px`,
              height: `${isResponsive ? ((width - paddingX) / 1067) * 1043 : 1043}px`,
              width: `${isResponsive ? width - paddingX : 1067}px`,
            }}
          />
          <Media
            id="home_back_hacked"
            link="/Careers/back_hacked.png"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden !absolute !bottom-0 left-0 z-[4]"
            containerStyle={{
              height: `${isResponsive ? ((width - paddingX) / 1067) * 740 : 740}px`,
              width: `${isResponsive ? width - paddingX : 1067}px`,
              left: `${isResponsive ? "32px" : "0px"}`,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage
