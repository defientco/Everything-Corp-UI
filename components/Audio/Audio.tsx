/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useRef } from "react"
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline"

const Audio = ({ src, loop = true }) => {
  const [muted, setMuted] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    audio.loop = loop
    audio.muted = muted
    audio.play()

    const handleKeyPress = (event) => {
      if (event.code === "KeyM") {
        setMuted(!muted)
      }
    }

    document.addEventListener("keypress", handleKeyPress)

    return () => {
      document.removeEventListener("keypress", handleKeyPress)
    }
  }, [loop, muted])

  const toggleMute = () => {
    const audio = audioRef.current
    setMuted(!muted)
    audio.muted = !muted
  }

  return (
    <>
      <button
        className="fixed z-50 p-2 text-gray-700 bg-gray-200 rounded-full top-28 right-4 focus:outline-none hover:bg-gray-300"
        onClick={toggleMute}
        type="button"
      >
        {muted ? <SpeakerXMarkIcon className="w-6 h-6" /> : <SpeakerWaveIcon className="w-6 h-6" />}
      </button>
      <audio ref={audioRef} src={src} autoPlay />
    </>
  )
}

export default Audio
