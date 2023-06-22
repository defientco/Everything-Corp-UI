import { useMeasure, useMedia, useWindowSize } from "react-use"
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
  const { width } = useWindowSize()

  const isXl = useMedia("(max-width: 1150px)")
  const isMobile = useMedia("(max-width: 768px)")
  const isLg = useMedia("(max-width: 1024px)")

  const spanStyle = {
    // eslint-disable-next-line no-nested-ternary
    fontSize: isXl
      ? isMobile
        ? `${(16 / 320) * (width - 32)}px`
        : `${(40 / 1065) * (width - 32)}px`
      : "40px",
  }

  const prefixs = {
      "fixers_first" : <span style={spanStyle}>We are proud</span>,
      "fixers_second" : <span style={spanStyle}>They are a team</span>,
      "fixers_third": <span style={spanStyle}>The Fixers are dedicated</span>,
      "fixers_fourth" : <span style={spanStyle}>We belive that work </span>,
  }

  return (
    <Layout type="base">
      <div className="p-4 pb-[150px]">
        <div className="relative z-[2]">
          <Media
            link="/Fixers/front.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden"
            containerStyle={{
              height: `${isXl ? ((width - 32) / 1065) * 1041 : 1041}px`,
              width: `${isXl ? width - 32 : 1065}px`,
            }}
          />
          <div
            className="absolute w-[100%] left-0 bg-[black] 
                py-[40px] md:py-[80px]
                shadow-[0_0_34px_45px_rgba(0,0,0)]"
            ref={sectionRef}
            style={{
              top: `${isXl ? ((width - 32) / 1065) * 1041 * 0.8 : 1041 * 0.8}px`,
            }}
          >
            {sections.map((section: SectionData) => (
              <pre
                key={section.id}
                className="font-aldrich 
                                text-[white] pb-[30px]
                                [&>span]:text-[36px] [&>span]:xl:text-[40px]
                            "
                style={{
                  // eslint-disable-next-line no-nested-ternary
                  fontSize: isLg
                    ? isMobile
                      ? `${(14 / 320) * (width - 32)}px`
                      : `${(32 / 1065) * (width - 32)}px`
                    : "32px",
                }}
              >
                {!isMobile ? prefixs[section.id] : ""}
                {!isMobile ? section.desktop : section.mobile}
              </pre>
            ))}
          </div>
        </div>
        <Media
          link="/Fixers/back.svg"
          type="image"
          containerClasses="rounded-[10px] overflow-hidden z-[1]"
          containerStyle={{
            marginTop: `${
              height - (isXl ? ((width - 32) / 1065) * 1041 * 0.2 - 40 : 1041 * 0.2 - 80)
            }px`,
            height: `${isXl ? ((width - 32) / 1065) * 1041 : 1041}px`,
            width: `${isXl ? width - 32 : 1065}px`,
          }}
        />
      </div>
    </Layout>
  )
}

export default FixersPage
