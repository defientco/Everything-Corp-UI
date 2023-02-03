/* eslint-disable react/button-has-type */
import { useState } from "react"
import AllowList from "../AllowList"
import VideoPage from "../VideoPage"
import Roadmap from "../Roadmap"

const RoadmapPage = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="sm:h-screen h-[200vh]">
      {activeStep === 0 && <Roadmap setActiveStep={setActiveStep} />}
      {activeStep === 1 && <VideoPage goBack={() => setActiveStep(0)} />}
      {activeStep === 4 && <AllowList />}
    </div>
  )
}

export default RoadmapPage
