import { useState } from "react"
import ImageMapper from "react-img-mapper"
import Confetti from "react-confetti"
import useWindowSize from "../../lib/useWindowSize"
import BackToRoadmapButton from "../BackToRoadmapButton"
import map from "../../lib/image-map.json"

const InteractiveStoryPage = () => {
  const [puzzleCompleted, setPuzzleCompleted] = useState(false)
  const { width, height } = useWindowSize()

  const handleClick = (e) => {
    setPuzzleCompleted(true)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <BackToRoadmapButton textColor="#000000" />
      <div className="w-[100vw] h-[100vh]">
        <ImageMapper src="/logo-cre8ors.png" map={map} natural onClick={handleClick} />
      </div>
      {puzzleCompleted && <Confetti width={width} height={height} />}
    </div>
  )
}

export default InteractiveStoryPage
