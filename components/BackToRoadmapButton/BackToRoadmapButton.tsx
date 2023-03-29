import Image from "next/image"
import { RoadmapScreens } from "../../lib/enums"
import customLoader from "../../lib/customLoader"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"

const BackToRoadmapButton = ({ textColor = "" }) => {
  const { setRoadMapScreen } = useCre8orsProvider()

  return (
    <button
      onClick={() => setRoadMapScreen(RoadmapScreens.Roadmap)}
      type="button"
      className={`absolute z-[10] left-10 top-10 p-5 border border-[#be0e11] hover:bg-white hover:text-[#be0e11] rounded-l-3xl rounded-r-lg flex align-middle gap-3 sm:text-xl text-xs ${
        textColor && `text-[${textColor}]`
      }`}
    >
      <div className="border-r border-[#be0e11] h-full pr-3 flex align-middle">
        <Image
          src="/logo.png"
          height="20px"
          width="30px"
          alt="logo"
          className="border-r border-gray-400 h-full"
          loader={customLoader}
        />
      </div>
      &larr; Back to Roadmap
    </button>
  )
}

export default BackToRoadmapButton
