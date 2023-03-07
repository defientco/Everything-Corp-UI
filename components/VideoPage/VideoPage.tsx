import { useRef, useState } from "react"
import useWindowSize from "../../lib/useWindowSize"
import BackToRoadmapButton from "../BackToRoadmapButton/BackToRoadmapButton"

const VideoPage = () => {
  const [playing, setPlaying] = useState(false)
  const [soundOn, setSoundOn] = useState(true)
  const { width, height } = useWindowSize()
  const vidRef = useRef(null)

  const handlePlayVideo = () => {
    setPlaying(true)
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <BackToRoadmapButton />
      {playing ? (
        <button
          onClick={() => setSoundOn(!soundOn)}
          type="button"
          className="absolute z-[10] right-10 sm:right-20 top-12"
        >
          SOUND: {soundOn ? "ON" : "OFF"}
        </button>
      ) : (
        <button onClick={handlePlayVideo} type="button" className="absolute z-[10] text-9xl">
          PLAY
        </button>
      )}
      {playing && (
        <video
          autoPlay
          muted={!soundOn}
          ref={vidRef}
          loop
          className="absolute w-auto sm:min-w-[95vw] sm:min-h-[90vh] sm:max-w-none rounded-xl"
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
