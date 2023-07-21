/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useEffect, useRef } from "react"
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline"

const EffectAudioUrl = {
  1: "/Mysteries/Sounds/SmallPaper1.mp3",
  2: "/Mysteries/Sounds/SmallPaper1.mp3",
  3: "/Mysteries/Sounds/Coins.mp3",
  4: "/Mysteries/Sounds/RegularPaper3.mp3",
  5: "/Mysteries/Sounds/BigPaper1.mp3",
  6: "/Mysteries/Sounds/BigPaper3.mp3",
  7: "/Mysteries/Sounds/BigPaper2.mp3",
  8: "/Mysteries/Sounds/RegularPaper1.mp3",
  9: "/Mysteries/Sounds/RegularPaper2.mp3",
  10: "/Mysteries/Sounds/BigPaper2.mp3",
  11: "/Mysteries/Sounds/SmallPaper1.mp3",
  12: "/Mysteries/Sounds/SmallPaper2.mp3",
  13: "/Mysteries/Sounds/RegularPaper1.mp3",
}

const Audio = ({ src, loop = true, effectAudioArea, clickedArea }) => {
  const [muted, setMuted] = useState(true)
  const audioRef = useRef(null)
  const effectAudioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.1
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
    const effectAudio = effectAudioRef.current
    setMuted(!muted)
    audio.muted = !muted
    effectAudio.muted = !muted
  }

  useEffect(() => {
    const effectAudio = effectAudioRef.current
    effectAudio.volume = 1
    effectAudio.play()
  }, [clickedArea])

  return (
    <>
      <button
        className="p-2 text-gray-700 bg-gray-200 rounded-full top-28 right-4 focus:outline-none hover:bg-gray-300"
        onClick={toggleMute}
        type="button"
      >
        {muted ? <SpeakerXMarkIcon className="w-6 h-6" /> : <SpeakerWaveIcon className="w-6 h-6" />}
      </button>
      <audio ref={audioRef} src={src} autoPlay />
      <audio ref={effectAudioRef} src={EffectAudioUrl[effectAudioArea]} muted />
    </>
  )
}

export default Audio
