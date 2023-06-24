import { ReactNode, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import { useMeasure } from "react-use"
import { Button } from "../../shared/Button"
import Media from "../../shared/Media"

interface SectionData {
  id: string
  desktop: ReactNode
  mobile: ReactNode
}

const AboutUs = () => {
  const [isCollaped, setIsCollapsed] = useState(true)
  const [containerRef, { width }] = useMeasure()

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isResponsive = useMediaQuery("(max-width: 1105px)")

  const sections: SectionData[] = [
    {
      id: "aboutus_first",
      desktop: (
        <>
          Established over a century ago by the greatest mind of the <br />
          20th Century, Nero Sinclair created Everything Corp in an
          <br />
          effort to turn the entire globe into a well oiled machine. His
          <br />
          confidential and highly coveted “Consilium Millenium” document,
          <br />
          better known as his 1,000 year plan, is still in effect to this day.
          <br />
          Closest confidants of Nero have raised generations of strict
          <br />
          thinkers and disciples of Nero Sinclair’s greatest teachings.
          <br />
          We know these thinkers today as “The Fixers”.
        </>
      ),
      mobile: (
        <>
          Established over a century ago by the greatest mind of the <br />
          20th Century, Nero Sinclair created Everything Corp in an
          <br />
          effort to turn the entire globe into a well oiled machine. His
          <br />
          confidential and highly coveted “Consilium Millenium”
          <br />
          document, better known as his 1,000 year plan, is still in
          <br />
          effect to this day. Closest confidants of Nero have raised
          <br />
          generations of strict thinkers and disciples of Nero
          <br />
          Sinclair’s greatest teachings. We know these thinkers
          <br />
          today as “The Fixers”.
        </>
      ),
    },
    {
      id: "aboutus_second",
      desktop: (
        <>
          Our fearless founder understood that individualism and
          <br />
          creativity were luxuries that could not be afforded in a world
          <br />
          facing such daunting challenges. Over the years, these values
          <br />
          have been passed down through generations of our leadership
          <br />
          team, ensuring that our mission remains true to our founder’s
          <br />
          vision.
        </>
      ),
      mobile: (
        <>
          Our fearless founder understood that individualism and
          <br />
          creativity were luxuries that could not be afforded in
          <br />
          a world facing such daunting challenges. Over the years,
          <br />
          these values have been passed down through generations
          <br />
          of our leadership team, ensuring that our mission remains
          <br />
          true to our founder’s vision.
        </>
      ),
    },
    {
      id: "aboutus_third",
      desktop: (
        <>
          Everything Corp has a rich history of providing practical and
          <br />
          functional products to meet the needs of the masses. However
          <br />
          the products aren’t central to the goals of Everything Corp.
          <br />
          Above all else, Everything Corp values its commitments to
          <br />
          prioritize efficiency and reliability over self-expression and
          <br />
          individualistic innovation. Streamlining processes and
          <br />
          eliminating unnecessary distractions create a more harmonious
          <br />
          and productive society.
        </>
      ),
      mobile: (
        <>
          Everything Corp has a rich history of providing practical
          <br />
          and functional products to meet the needs of the masses.
          <br />
          However the products aren’t central to the goals of
          <br />
          Everything Corp. Above all else, Everything Corp values its
          <br />
          commitments to prioritize efficiency and reliability over
          <br />
          self-expression and individualistic innovation. Streamlining
          <br />
          processes and eliminating unnecessary distractions create
          <br />a more harmonious and productive society.
        </>
      ),
    },
    {
      id: "aboutus_fourth",
      desktop: (
        <>
          Through offering a single community culture enforcing strict
          <br />
          conformity, we exist in a predictable and stable society. We
          <br />
          recognize that individuality can sometimes lead to chaos and
          <br />
          inefficiency, and we aim to help our customers focus on what
          <br />
          truly matters by taking these distractions out of the equation.
          <br />
          We believe that through providing uniformity, we can break
          <br />
          societal functionality down to a science.
        </>
      ),
      mobile: (
        <>
          Through offering a single community culture enforcing
          <br />
          strict conformity, we exist in a predictable and stable
          <br />
          society. We recognize that individuality can sometimes lead
          <br />
          to chaos and inefficiency, and we aim to help our customers
          <br />
          focus on what truly matters by taking these distractions
          <br />
          out of the equation. We believe that through providing
          <br />
          uniformity, we can break societal functionality down to a<br />
          science.
        </>
      ),
    },
    {
      id: "aboutus_fifth",
      desktop: (
        <>
          At our core, we understand that our products should serve
          <br />
          the needs of the masses, rather than catering to individual
          <br />
          tastes or desires. We are committed to creating a world where
          <br />
          practicality and conformity are valued above all else. While we
          <br />
          recognize that some may view our approach as limiting, we
          <br />
          believe that by eliminating distractions and encouraging
          <br />
          conformity, we can make Everything, better.
        </>
      ),
      mobile: (
        <>
          At our core, we understand that our products should
          <br />
          serve the needs of the masses, rather than catering to
          <br />
          individual tastes or desires. We are committed to creating a<br />
          world where practicality and conformity are valued above
          <br />
          all else. While we recognize that some may view our
          <br />
          approach as limiting, we believe that by eliminating
          <br />
          distractions and encouraging conformity, we can make
          <br />
          Everything, better.
        </>
      ),
    },
  ]

  return (
    <div
      className={`relative rounded-[10px] md:rounded-[42px] bg-white
            p-2 samsungS8:p-4 md:px-20 md:pt-10 md:pb-20 
            mt-[30px] md:mt-[70px] overflow-hidden ${
              isCollaped ? "h-[300px] md:h-[780px] xl:h-[900px]" : "h-full"
            }
            transition ease-in-out duration-[1000ms]`}
      ref={containerRef}
    >
      {!isCollaped && (
        <div className="absolute right-2 top-2 sm:right-4 md:right-10 sm:top-4 md:top-10">
          <Button
            id="about-us-close-btn"
            onClick={() => setIsCollapsed(true)}
            className="md:!px-[17px] md:!py-[1px] sm:!px-[10px] sm:!py-[5px] !px-[5px] !py-[0px]
                    md:text-[16px] md:text-[32px] text-[15px]"
          >
            X
          </Button>
        </div>
      )}
      {isCollaped && (
        <div
          className="absolute bottom-0 left-0 h-[150px] md:h-[390px]
                w-[100%] bg-gradient-to-t from-[white] via-[#ffffffde] to-[#ffffff45]
                flex items-end justify-center pb-[50px] md:pb-[140px]"
        >
          <Button
            id="about-us-read-more-btn"
            className="capitalize font-aldrich
                    md:!px-[28px] md:!py-[11px] !px-[20px] !py-[7.8px]
                    md:text-[16px] md:text-[16px] text-[12px]"
            onClick={() => setIsCollapsed(false)}
          >
            Read More
          </Button>
        </div>
      )}
      <div className="font-aldrich text-[20px] md:text-[48px] xl:text-[54px] font-[400] pb-[20px] md:pb-[40px]">
        About Us
      </div>
      <div className="">
        {sections.map((section: SectionData) => (
          <div
            key={section.id}
            className="font-aldrich 
                        font-[400] pb-[15px] md:pb-[30px]"
            style={{
              // eslint-disable-next-line no-nested-ternary
              fontSize: isResponsive
                ? isMobile
                  ? `${(33 / 1086) * width}px`
                  : `${(32 / 1086) * width}px`
                : "28px",
            }}
          >
            {isMobile ? section.mobile : section.desktop}
          </div>
        ))}
      </div>
      <div className="flex gap-2 md:gap-10 pt-[10px] md:pt-[30px]">
        <Media
          id="about_us_logo"
          link="/Home/big_logo.svg"
          containerClasses="xl:w-[165px] xl:h-[178px]
                    md:w-[118px] md:h-[127px]
                    samsungS8:w-[59px] samsungS8:h-[66.5px]
                    w-[50px] h-[54px]"
          type="image"
        />
        <div>
          <div className="font-aldrich text-[8.5px] samsungS8:text-[10px] md:text-[20px] xl:text-[28px]">
            Earnest Cain, CEO
          </div>
          <Media
            id="about_us_sign"
            link="/Home/sign.svg"
            type="image"
            containerClasses="xl:w-[511px] xl:h-[147px]
                        md:w-[365px] md:h-[105px]
                        samsungS8:w-[182.5px] samsungS8:h-[52.5px]
                        w-[155px] h-[44.5px]"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
