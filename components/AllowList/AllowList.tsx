/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import Confetti from "react-confetti"
import { Widget } from "@typeform/embed-react"
import AllowListForm from "../AllowListForm"
import useWindowSize from "../../lib/useWindowSize"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import SkeletonCard from "../SkeletonCard"
import ChoiceScreen from "../ChoiceScreen"

const AllowList = () => {
  const { handleQuizSubmission, showQuiz, signedUp, showSkeleton } = useCre8orsProvider()
  const [choice, setChoice] = React.useState(0)
  const onClickHandler = (value: number) => {
    setChoice(value)
  }
  const { width, height } = useWindowSize()
  return (
    <ChoiceScreen onClickHandler={onClickHandler} />
    // <div className="flex items-center justify-center h-screen">
    //   {showQuiz && (
    //     <Widget
    //       id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
    //       style={{ width: "100%", height: "100%" }}
    //       onSubmit={handleQuizSubmission}
    //     />
    //   )}
    //   {!showQuiz && !showSkeleton && <AllowListForm />}
    //   {showSkeleton && <SkeletonCard />}
    //   {signedUp && <Confetti width={width} height={height} />}
    // </div>
  )
}

export default AllowList
