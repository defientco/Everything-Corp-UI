import React from "react"
import Confetti from "react-confetti"
import Link from "next/link"
import AllowListForm from "../AllowListForm"
import useWindowSize from "../../lib/useWindowSize"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import SkeletonCard from "../SkeletonCard"
import FindCre8orType from "../FindCre8orType"

const AllowList = () => {
  const { showQuiz, signedUp, showSkeleton, creatorType } = useCre8orsProvider()
  const { width, height } = useWindowSize()
  return (
    <div>
      <div className="absolute text-sm font-medium text-center text-white rounded-lg z-2">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
            />
          </svg>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center w-full min-h-screen">
        {!creatorType && showQuiz && <FindCre8orType />}
        {!showQuiz && !showSkeleton && creatorType.length > 0 && <AllowListForm />}
        {showSkeleton && <SkeletonCard />}
        {signedUp && <Confetti width={width} height={height} />}
      </div>
    </div>
  )
}

export default AllowList
