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
import { ChoiceOptions, Screens } from "../../lib/enums"
import FindCre8orType from "../FindCre8orType"

const AllowList = () => {
  const { showQuiz, signedUp, showSkeleton, creatorType } = useCre8orsProvider()
  const [choice, setChoice] = React.useState(ChoiceOptions.Undecided)
  const [currentScreen, setCurrentScreen] = React.useState(Screens.AllowListChoice)
  const onClickHandler = (value: number, screen: number) => {
    setChoice(value)
    setCurrentScreen(screen)
  }
  const onBackClickHandler = () => {
    switch (currentScreen) {
      case Screens.AllowListChoice:
        setCurrentScreen(Screens.Roadmap)
        break
      default:
        setCurrentScreen(Screens.AllowListChoice)
        setChoice(ChoiceOptions.Undecided)
    }
  }
  const { width, height } = useWindowSize()
  return (
    <div>
      {currentScreen !== Screens.AllowListChoice && (
        <button
          type="button"
          className="absolute px-5 py-2 mt-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 z-2"
          onClick={onBackClickHandler}
        >
          Back
        </button>
      )}
      <div className="flex flex-row items-center justify-center w-full h-screen">
        {choice === ChoiceOptions.Undecided &&
          !creatorType &&
          currentScreen === Screens.AllowListChoice && (
            <ChoiceScreen onClickHandler={onClickHandler} />
          )}
        {choice === ChoiceOptions.PickYourCre8orType &&
          !creatorType &&
          currentScreen === Screens.PickYourCre8orType && <PickCre8orType />}
        {choice === ChoiceOptions.FindYourCre8orType &&
          !creatorType &&
          currentScreen === Screens.FindYourCre8orType && <FindCre8orType />}
        {((!showQuiz && !showSkeleton) || creatorType.length > 0) &&
          currentScreen === Screens.Details &&
          currentScreen === Screens.Details && <AllowListForm />}
        {showSkeleton && <SkeletonCard />}
        {signedUp && <Confetti width={width} height={height} />}
      </div>
    </div>
  )
}

export default AllowList
