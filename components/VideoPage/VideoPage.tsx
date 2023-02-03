import Confetti from "react-confetti"
import { Widget } from "@typeform/embed-react"
import AllowListForm from "../AllowListForm"
import useWindowSize from "../../lib/useWindowSize"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"
import SkeletonCard from "../SkeletonCard"
import { useRef, useState } from "react"

const VideoPage = ({ goBack }: any) => {
  const [playing, setPlaying] = useState(false)
  const [soundOn, setSoundOn] = useState(true)
  const { width, height } = useWindowSize()
  const vidRef = useRef(null)

  const handlePlayVideo = () => {
    setPlaying(true)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      {playing ? (
        <div>
          <button onClick={goBack} type="button" className="absolute z-[10] left-10">
            Back to Roadmap
          </button>
          <button
            onClick={() => setSoundOn(!soundOn)}
            type="button"
            className="absolute z-[10] right-10"
          >
            Sound: {soundOn ? "On" : "Off"}
          </button>
        </div>
      ) : (
        <button onClick={handlePlayVideo} type="button" className="absolute z-[10]">
          PLAY
        </button>
      )}
      {playing && (
        <video
          autoPlay
          muted={!soundOn}
          ref={vidRef}
          loop
          className="absolute w-auto min-w-[90vw] min-h-[90vh] max-w-none rounded-xl"
          width={width}
          height={height}
        >
          <track kind="captions" />
          <source src="/video/trailer.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default VideoPage
