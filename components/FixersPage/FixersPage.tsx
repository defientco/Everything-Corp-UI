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

const FixersPage = () => {
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

  const prefixs = {
    fixers_first: <span style={spanStyle}>We are proud</span>,
    fixers_second: <span style={spanStyle}>They are a team</span>,
    fixers_third: <span style={spanStyle}>The Fixers are dedicated</span>,
    fixers_fourth: <span style={spanStyle}>We belive that work </span>,
  }

  return (
    <Layout type="base">
      <div
        className="pb-[150px] pt-[32px]"
        ref={containerRef}
        style={{
          width: isResponsive ? "100vw" : "1065px",
        }}
      >
        <div
          className="relative z-[2]"
          style={{
            paddingLeft: isMobile ? `${paddingX / 2}px` : "0px",
            paddingRight: isMobile ? `${paddingX / 2}px` : "0px",
          }}
        >
          <Media
            id="fixers_first"
            link="/Fixers/front.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden"
            containerStyle={{
              height: `${isResponsive ? ((width - paddingX) / 1065) * 1041 : 1041}px`,
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
                    ? ((width - paddingX) / 1065) * 1041 * 0.8
                    : ((width - paddingX) / 1065) * 1041 * 0.7
                  : 1041 * 0.7
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
                  style={{
                    // eslint-disable-next-line no-nested-ternary
                    fontSize: isLg
                      ? isMobile
                        ? `${(14 / 320) * (width - paddingX)}px`
                        : `${(32 / 1065) * (width - paddingX)}px`
                      : "32px",
                  }}
                >
                  {!isMobile ? prefixs[section.id] : ""}
                  {!isMobile ? section.desktop : section.mobile}
                </pre>
              ))}
              <div
                className="absolute w-[100%] text-center text-white font-aldrich
               drop-shadow-[2px_6px_2px_#000]"
                style={{
                  top: isResponsive ? `-${(300 / 1065) * (width - paddingX)}px` : "-300px",
                  // eslint-disable-next-line no-nested-ternary
                  fontSize: isLg
                    ? isMobile
                      ? `${(52 / 320) * (width - paddingX)}px`
                      : `${(129 / 1065) * (width - paddingX)}px`
                    : "129px",
                }}
              >
                The Fixers
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingLeft: isMobile ? `${paddingX / 2}px` : "0px",
            paddingRight: isMobile ? `${paddingX / 2}px` : "0px",
          }}
        >
          <Media
            id="fixers_second"
            link="/Fixers/back.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden z-[1]"
            containerStyle={{
              marginTop: `${
                height -
                // eslint-disable-next-line no-nested-ternary
                (isResponsive
                  ? isMobile
                    ? ((width - paddingX) / 1065) * 1043 * 0.25 - 40
                    : ((width - paddingX) / 1043) * 1041 * 0.3 - 40
                  : 1043 * 0.3 - 80)
              }px`,
              height: `${isResponsive ? ((width - paddingX) / 1065) * 1043 : 1043}px`,
              width: `${isResponsive ? width - paddingX : 1065}px`,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default FixersPage
