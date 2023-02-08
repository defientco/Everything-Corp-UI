/* eslint-disable react/button-has-type */
import { useState } from "react"
import AllowList from "../AllowList"
import Roadmap from "../Roadmap"

const RoadmapPage = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="sm:h-screen h-[200vh]">
      {activeStep === 0 && <Roadmap setActiveStep={setActiveStep} />}
      {activeStep === 4 && <AllowList setActiveStep={setActiveStep} />}
    </div>
  )
}

export default RoadmapPage
