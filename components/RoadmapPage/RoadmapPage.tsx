import { RoadmapScreens } from "../../lib/enums"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import AllowList from "../AllowList"
import VideoPage from "../VideoPage"
import Roadmap from "../Roadmap"

const RoadmapPage = () => {
  const { roadMapScreen } = useCre8orsProvider()

  const displayScreen = () => {
    switch (roadMapScreen) {
      case RoadmapScreens.AllowListChoice:
        return <AllowList />
      case RoadmapScreens.Trailer:
        return <VideoPage />
      default:
        return <Roadmap />
    }
  }
  return <div className="sm:h-screen h-[200vh]">{displayScreen()}</div>
}

export default RoadmapPage
