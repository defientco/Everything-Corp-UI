import { useMediaQuery, useWindowSize } from "usehooks-ts"
import Layout from "../Layout"
import data from "./sections.json"
import { useMeasure, useMedia } from "react-use"

interface SectionData {
  id: string
  mobile_question: string
  desktop_question: string
  desktop_content: string
  mobile_content: string
}

const FaqPage = () => {
  const sections: SectionData[] = data as SectionData[]

  const [ titleRef, { width } ]   = useMeasure()

  const isResponsive = useMediaQuery('(max-width: 1280px)')
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <Layout type="background">
      <div className="font-aldrich text-white px-2 xs:px-8 text-center md:px-20 md:text-left pb-[30px] md:pb-[50px]
      drop-shadow-[2px_6px_2px_#000]"
        style={{
          fontSize: isResponsive ? `${107 / 1280 * width}px` : '107px',
          width: isResponsive ? '100vw' : '1280px'
        }}
        ref={titleRef}
      >
        FAQ
      </div>
      {sections.map((section: SectionData) => (
        <div key={section.id} className="font-aldrich text-white pb-[20px] md:pb-[50px] px-2 xs:px-8 md:px-20">
          <pre className="leading-[146.3%] underline font-aldrich"
            style={{
              fontSize: isResponsive
                  ? isMobile 
                    ? `${42 / 1065 * width}px`
                    : `${40 / 1065 * width}px`
                  : "40px",
            }}
          >
              {`Q: ${isMobile ? section.mobile_question : section.desktop_question}`}
          </pre>
          <pre className="text-[28.5px] font-aldrich"
            style={{
              fontSize: isResponsive
                  ? isMobile
                    ? `${42 / 1065 * width}px`
                    : `${33 / 1065 * width}px`
                  : "33px",
            }}
          >{`A: ${isMobile ? section.mobile_content : section.desktop_content}`}</pre>
        </div>
      ))}
    </Layout>
  )
}

export default FaqPage
