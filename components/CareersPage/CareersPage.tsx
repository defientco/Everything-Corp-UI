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

  return (
    <Layout type="base">
      <div
        className="pb-[150px]"
        ref={containerRef}
        style={{
          width: isResponsive ? "100vw" : "1065px",
        }}
      >
        <div className="relative z-[2] p-4">
          <Media
            link="/Careers/front.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden"
            containerStyle={{
              height: `${isResponsive ? ((width - 32) / 1067) * 1043 : 1043}px`,
              width: `${isResponsive ? width - 32 : 1067}px`,
            }}
          />
          <div
            className="absolute px-4 left-0 bg-[black] 
                py-[40px] md:py-[80px]
                shadow-[0_0_34px_45px_rgba(0,0,0)]"
            ref={sectionRef}
            style={{
              top: `${
                // eslint-disable-next-line no-nested-ternary
                isResponsive
                  ? isMobile
                    ? ((width - 32) / 1067) * 1043 * 0.9
                    : ((width - 32) / 1067) * 1043 * 0.75
                  : 1043 * 0.75
              }px`,
            }}
          >
            <div className="relative">
              {sections.map((section: SectionData) => (
                <div key={section.id}>
                  <div
                    className="font-aldrich text-white uppercase underline"
                    style={{
                      // eslint-disable-next-line no-nested-ternary
                      fontSize: isLg
                        ? isMobile
                          ? `${(17 / 320) * (width - 32)}px`
                          : `${(35 / 1067) * (width - 32)}px`
                        : "35px",
                    }}
                  >
                    {section.title}
                  </div>
                  <pre
                    className="font-aldrich 
                                    text-[white] pb-[30px]
                                    [&>span]:text-[36px] [&>span]:xl:text-[40px]
                                    leading-[108.8%]
                                "
                    style={{
                      // eslint-disable-next-line no-nested-ternary
                      fontSize: isLg
                        ? isMobile
                          ? `${(14 / 320) * (width - 32)}px`
                          : `${(32 / 1067) * (width - 32)}px`
                        : "32px",
                    }}
                  >
                    {!isMobile ? section.desktop : section.mobile}
                  </pre>
                </div>
              ))}
              <div
                className="absolute w-[100%] text-center text-white font-aldrich
               drop-shadow-[2px_6px_2px_#000] leading-[100%]"
                style={{
                  top: isResponsive ? `-${(300 / 1067) * (width - 32)}px` : "-300px",
                  // eslint-disable-next-line no-nested-ternary
                  fontSize: isLg
                    ? isMobile
                      ? `${(43 / 319) * (width - 32)}px`
                      : `${(129 / 1067) * (width - 32)}px`
                    : "129px",
                }}
              >
                Careers
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Media
            link="/Careers/back.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden z-[1]"
            containerStyle={{
              marginTop: `${
                height -
                // eslint-disable-next-line no-nested-ternary
                (isResponsive
                  ? isMobile
                    ? ((width - 32) / 1067) * 1043 * 0.1 - 40
                    : ((width - 32) / 1067) * 1043 * 0.25 - 40
                  : 1043 * 0.25 - 80)
              }px`,
              height: `${isResponsive ? ((width - 32) / 1067) * 1043 : 1043}px`,
              width: `${isResponsive ? width - 32 : 1067}px`,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage
