import { useMediaQuery } from "usehooks-ts"
import { useMeasure } from "react-use"
import Layout from "../Layout"
import data from "./sections.json"
import Media from "../../shared/Media"

interface SectionData {
  id: string
  mobile_question: string
  desktop_question: string
  desktop_content: string
  mobile_content: string
}

const FaqPage = () => {
  const sections: SectionData[] = data as SectionData[]

  const [titleRef, { width }] = useMeasure()
  const [containerRef, containerSize] = useMeasure()

  const isResponsive = useMediaQuery("(max-width: 1280px)")
  const isMobile = useMediaQuery("(max-width: 768px)")

  const dynamicFontSize = (mFontSize: number, dFontSize: number, containerWidth: number) => {
    if (isResponsive) {
      if (isMobile) return `${(mFontSize / containerWidth) * width}px`
      return `${(dFontSize / containerWidth) * width}px`
    }

    return `${dFontSize}px`
  }

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <Layout type="background">
        <div
          className="font-aldrich text-white px-2 xs:px-8 text-center md:px-20 md:text-left pb-[30px] md:pb-[50px]
          drop-shadow-[2px_6px_2px_#000] w-[100vw] xl1280:w-[1280px]"
          style={{ fontSize: dynamicFontSize(107, 107, 1280) }}
          ref={titleRef}
        >
          FAQ
        </div>
        {sections.map((section: SectionData) => (
          <div
            key={section.id}
            className="font-aldrich text-white pb-[20px] md:pb-[50px] px-2 xs:px-8 md:px-20"
          >
            <pre
              className="leading-[146.3%] underline font-aldrich"
              style={{ fontSize: dynamicFontSize(42, 40, 1065) }}
            >
              {`Q: ${isMobile ? section.mobile_question : section.desktop_question}`}
            </pre>
            <pre
              className="text-[28.5px] font-aldrich"
              style={{ fontSize: dynamicFontSize(42, 33, 1065) }}
            >{`A: ${isMobile ? section.mobile_content : section.desktop_content}`}</pre>
          </div>
        ))}
        <div className="absolute w-full top-0 left-0 z-[10] pt-[50px] md:pt-[100px]">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <Media
                id={`faq_hacked_${i}`}
                // eslint-disable-next-line react/no-array-index-key
                key={`faq_hacked_${i}`}
                link="/Faq/faq_hacked.png"
                type="image"
                containerStyle={{
                  height: `${(containerSize.width / 1480) * 894}px`,
                  width: `${containerSize.width}px`,
                }}
              />
            ))}
        </div>
      </Layout>
    </div>
  )
}

export default FaqPage
