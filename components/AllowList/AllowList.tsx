/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import Confetti from "react-confetti"
import { Widget } from "@typeform/embed-react"
import AllowListForm from "../AllowListForm"
import useWindowSize from "../../lib/useWindowSize"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import SkeletonCard from "../SkeletonCard"
import ChoiceScreen from "../ChoiceScreen"
import PickCre8orType from "../PickCre8orType"
import { ChoiceOptions } from "../../lib/enums"
import FindCre8orType from "../FindCre8orType"

const AllowList = () => {
  const { showQuiz, signedUp, showSkeleton, creatorType } = useCre8orsProvider()
  const [choice, setChoice] = React.useState(ChoiceOptions.Undecided)
  const onClickHandler = (value: number) => {
    setChoice(value)
  }
  const { width, height } = useWindowSize()
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">
      {choice === ChoiceOptions.Undecided && !creatorType && (
        <ChoiceScreen onClickHandler={onClickHandler} />
      )}
      {choice === ChoiceOptions.PickYourCre8orType && !creatorType && <PickCre8orType />}
      {choice === ChoiceOptions.FindYourCre8orType && !creatorType && <FindCre8orType />}
      {((!showQuiz && !showSkeleton) || creatorType.length > 0) && <AllowListForm />}
      {showSkeleton && <SkeletonCard />}
      {signedUp && <Confetti width={width} height={height} />}
    </div>
  )
}

export default AllowList
