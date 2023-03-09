import { RoadmapScreens } from "../../lib/enums"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import AllowList from "../AllowList"
import VideoPage from "../VideoPage"
import Roadmap from "../Roadmap"
import InteractiveStoryPage from "../InteractiveStoryPage"

const RoadmapPage = () => {
  const { roadMapScreen } = useCre8orsProvider()

  const displayScreen = () => {
    switch (roadMapScreen) {
      case RoadmapScreens.Trailer:
        return <VideoPage />
      case RoadmapScreens.Mysteries:
        return <InteractiveStoryPage />
      case RoadmapScreens.AllowListChoice:
        return <AllowList />

      default:
        return <Roadmap />
    }
  }
  return <div className="sm:h-screen h-[200vh]">{displayScreen()}</div>
}

export default RoadmapPage
