import { useMeasure } from "react-use"
import { useMediaQuery } from "usehooks-ts"
import Layout from "../Layout"
import Media from "../../shared/Media"
import data from "./sections.json"

interface SectionData {
  id: string
  desktop: string
  mobile: string
}

const EvilPage = () => {
  const sections: SectionData[] = data as SectionData[]

  const [sectionRef, { height }] = useMeasure()
  const [containerRef, { width }] = useMeasure()

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isLg = useMediaQuery("(max-width: 1024px)")
  const isResponsive = useMediaQuery("(max-width: 1065px)")

  const paddingX = 64

  const spanStyle = {
    // eslint-disable-next-line no-nested-ternary
    fontSize: isResponsive
      ? isMobile
        ? `${(16 / 320) * (width - paddingX)}px`
        : `${(40 / 1065) * (width - paddingX)}px`
      : "40px",
  }

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

  const prefixs = {
    evil_first: <span style={spanStyle}>Everything Corp</span>,
    evil_second: <span style={spanStyle}>Industrialization and Practical</span>,
    evil_third: <span style={spanStyle}>Our</span>,
  }

  return (
    <div className="relative w-full h-[100%] bg-[red]">
      <div className="absolute z-[10] left-0 top-0 w-[100vw] flex justify-center">
        <Media
          id="top_evil_hacked"
          link="/Evil/edge_hacked.png"
          type="image"
          containerClasses="rounded-[10px] overflow-hidden z-[1]"
          containerStyle={{
            height: `${isResponsive ? ((width - paddingX) / 1065) * 593 : 593}px`,
            width: `${isResponsive ? width - paddingX : 1065}px`,
          }}
        />
      </div>
      <div className="absolute z-[11] left-0 bottom-0 w-[100vw] flex justify-center">
        <Media
          id="bottom_evil_hacked"
          link="/Evil/edge_hacked.png"
          type="image"
          containerClasses="rounded-[10px] overflow-hidden z-[1]"
          containerStyle={{
            height: `${isResponsive ? ((width - paddingX) / 1065) * 593 : 593}px`,
            width: `${isResponsive ? width - paddingX : 1065}px`,
          }}
        />
      </div>
      <div className="absolute z-[12] left-0 top-0 w-[100vw] flex flex-col items-center pt-[92px] md:pt-[152px]">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <Media
              id={`content_hacked_${i}`}
              // eslint-disable-next-line react/no-array-index-key
              key={`content_hacked_${i}`}
              link="/Evil/content_hacked.png"
              type="image"
              containerClasses="rounded-[10px] overflow-hidden z-[1] mb-[2rem]"
              containerStyle={{
                height: `${isResponsive ? ((width - paddingX) / 1065) * 289 : 289}px`,
                width: `${isResponsive ? width - paddingX : 1065}px`,
              }}
            />
          ))}
      </div>
      <Layout type="base">
        <div ref={containerRef} className="w-[100vw] xl1065:w-[1065px] pb-[150px] pt-[32px]">
          <div
            className="relative z-[2]"
            style={{
              paddingLeft: isMobile ? `${paddingX / 2}px` : "0px",
              paddingRight: isMobile ? `${paddingX / 2}px` : "0px",
            }}
          >
            <Media
              id="home_evil"
              link="/Evil/front.svg"
              type="image"
              containerClasses="rounded-[10px] overflow-hidden"
              containerStyle={{
                height: `${isResponsive ? ((width - paddingX) / 1065) * 945 : 945}px`,
                width: `${isResponsive ? width - paddingX : 1065}px`,
              }}
            />
            <div
              className="absolute md:w-[100%] bg-[black] 
                  py-[40px] md:py-[80px]
                  shadow-[0_0_34px_45px_rgba(0,0,0)]"
              ref={sectionRef}
              style={{
                top: `${
                  // eslint-disable-next-line no-nested-ternary
                  isResponsive
                    ? isMobile
                      ? ((width - paddingX) / 1065) * 945 * 0.9
                      : ((width - paddingX) / 1065) * 945 * 0.8
                    : 945 * 0.8
                }px`,
              }}
            >
              <div className="relative">
                {sections.map((section: SectionData) => (
                  <pre
                    key={section.id}
                    className="font-aldrich 
                                    text-[white] pb-[30px]
                                    [&>span]:text-[36px] [&>span]:xl:text-[40px]
                                    leading-[108.8%]
                                "
                    style={{ fontSize: dynamicFontSize(14, 32, 320, 1065) }}
                  >
                    {!isMobile ? prefixs[section.id] : ""}
                    {!isMobile ? section.desktop : section.mobile}
                  </pre>
                ))}
                <div
                  className="absolute w-[100%] text-center text-white font-aldrich
                drop-shadow-[2px_6px_2px_#000] leading-[100%]"
                  style={{
                    top: isResponsive ? `-${(300 / 1065) * (width - paddingX)}px` : "-300px",
                    fontSize: dynamicFontSize(23, 79, 321, 1065),
                  }}
                >
                  Economic & Vocational
                  <br />
                  Improvement League
                </div>
              </div>
            </div>
          </div>
          <div className="px-[32px] md:px-[0px]">
            <Media
              id="desktop_home_evil"
              link="/Evil/factory.svg"
              type="image"
              containerClasses="rounded-[10px] overflow-hidden z-[1]"
              containerStyle={{
                marginTop: `${
                  height -
                  // eslint-disable-next-line no-nested-ternary
                  (isResponsive
                    ? isMobile
                      ? ((width - paddingX) / 1065) * 1041 * 0.1 - 40
                      : ((width - paddingX) / 1065) * 1041 * 0.2 - 40
                    : 1041 * 0.2 - 80)
                }px`,
                height: `${isResponsive ? ((width - paddingX) / 1065) * 1041 : 1041}px`,
                width: `${isResponsive ? width - paddingX : 1065}px`,
              }}
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default EvilPage
