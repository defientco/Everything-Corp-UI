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

  const spanStyle = {
    // eslint-disable-next-line no-nested-ternary
    fontSize: isResponsive
      ? isMobile
        ? `${(16 / 320) * (width - 32)}px`
        : `${(40 / 1065) * (width - 32)}px`
      : "40px",
  }

  const prefixs = {
      "evil_first" : <span style={spanStyle}>Everything Corp</span>,
      "evil_second" : <span style={spanStyle}>Industrialization and Practical</span>,
      "evil_third": <span style={spanStyle}>Our</span>
  }

  return (
    <Layout type="base">
      <div className="pb-[150px]" ref={containerRef}
        style={{
          width: isResponsive ? '100vw' : '1065px'
        }}
      >
        <div className="relative z-[2] p-4">
          <Media
            link="/Evil/front.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden"
            containerStyle={{
              height: `${isResponsive ? ((width - 32) / 1065) * 945 : 945}px`,
              width: `${isResponsive ? width - 32 : 1065}px`,
            }}
          />
          <div
            className="absolute w-[100%] left-0 bg-[black] 
                py-[40px] md:py-[80px] px-4
                shadow-[0_0_34px_45px_rgba(0,0,0)]"
            ref={sectionRef}
            style={{
              top: `${isResponsive ? isMobile ? ((width - 32) / 1065) * 945 * 0.9 : ((width - 32) / 1065) * 945 * 0.8 : 945 * 0.8}px`,
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
                        ? `${(14 / 320) * (width - 32)}px`
                        : `${(32 / 1065) * (width - 32)}px`
                      : "32px",
                  }}
                >
                  {!isMobile ? prefixs[section.id] : ""}
                  {!isMobile ? section.desktop : section.mobile}
                </pre>
              ))}
              <div className="absolute w-[100%] text-center text-white font-aldrich
               drop-shadow-[2px_6px_2px_#000] leading-[100%]"
               style={{
                top: isResponsive ? `-${300 / 1065 * (width - 32)}px` : '-300px',
                fontSize: isLg
                  ? isMobile
                    ? `${(23 / 321) * (width - 32)}px`
                    : `${(79 / 1065) * (width - 32)}px`
                  : "79px",
               }}
              >
                Economic & Vocational<br/>
                Improvement League 
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Media
            link="/Evil/factory.svg"
            type="image"
            containerClasses="rounded-[10px] overflow-hidden z-[1]"
            containerStyle={{
              marginTop: `${
                height - (isResponsive ? isMobile ? ((width - 32) / 1065) * 1041 * 0.1 - 40 : ((width - 32) / 1065) * 1041 * 0.2 - 40 : 1041 * 0.2 - 80)
              }px`,
              height: `${isResponsive ? ((width - 32) / 1065) * 1041 : 1041}px`,
              width: `${isResponsive ? width - 32 : 1065}px`,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default EvilPage
