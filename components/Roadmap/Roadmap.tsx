/* eslint-disable react/button-has-type */
import { useEffect, useState } from "react"

const Roadmap = (props: any) => {
  const { setActiveStep } = props
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })
  const className =
    "border border-sky-500 h-[80vh] min-w-[100vw] sm:min-w-[30vw] rounded-2xl p-5 overflow-x-scroll"

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollPosition({ x: window.scrollX + event.deltaY, y: window.scrollY })
    }
    window.addEventListener("wheel", handleScroll)
    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(scrollPosition.x, scrollPosition.y)
  }, [scrollPosition])

  return (
    <div className="sm:h-screen h-[200vh] w-[200vw] flex items-center  gap-3 pl-[154vw] sm:pl-[50vw] overflow-x-scroll">
      <button className={className} onClick={() => setActiveStep(4)}>
        Watch Trailer
      </button>
      <button className={className} onClick={() => setActiveStep(4)}>
        Mysteries Revealed
      </button>
      <button className={className} onClick={() => setActiveStep(4)}>
        Storyline
      </button>
      <button className={className} onClick={() => setActiveStep(4)}>
        Play Whitelist Quiz
      </button>
      <button disabled className={className} onClick={() => setActiveStep(4)}>
        COMING SOON
      </button>
      <button disabled className={className} onClick={() => setActiveStep(4)}>
        COMING SOON
      </button>
      <button disabled className={className} onClick={() => setActiveStep(4)}>
        COMING SOON
      </button>
    </div>
  )
}

export default Roadmap
