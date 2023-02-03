import Confetti from "react-confetti"
import { Widget } from "@typeform/embed-react"
import AllowListForm from "../AllowListForm"
import useWindowSize from "../../lib/useWindowSize"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import SkeletonCard from "../SkeletonCard"

const AllowList = () => {
  const { handleQuizSubmission, showQuiz, signedUp, showSkeleton } = useCre8orsProvider()

  const { width, height } = useWindowSize()
  return (
    <div className="h-screen flex items-center justify-center">
      {showQuiz && (
        <Widget
          id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
          style={{ width: "100%", height: "100%" }}
          onSubmit={handleQuizSubmission}
        />
      )}
      {!showQuiz && !showSkeleton && <AllowListForm />}
      {showSkeleton && <SkeletonCard />}
      {signedUp && <Confetti width={width} height={height} />}
    </div>
  )
}

export default AllowList
