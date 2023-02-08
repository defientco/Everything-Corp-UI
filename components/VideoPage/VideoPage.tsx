import { useRef, useState } from "react"
import Image from "next/image"
import useWindowSize from "../../lib/useWindowSize"

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
      <button
        onClick={goBack}
        type="button"
        className="absolute z-[10] left-10 top-10 p-5 border border-[#be0e11] hover:bg-white hover:text-[#be0e11] rounded-l-3xl rounded-r-lg flex align-middle gap-3 sm:text-xl text-xs"
      >
        <div className="border-r border-[#be0e11] h-full pr-3 flex align-middle">
          <Image
            src="/logo.png"
            height="20px"
            width="30px"
            alt="logo"
            className="border-r border-gray-400 h-full"
          />
        </div>
        &larr; Back to Roadmap
      </button>
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
