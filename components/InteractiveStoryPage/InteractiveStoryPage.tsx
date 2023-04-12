import { useEffect, useState } from "react"
import ImageMapper from "react-img-mapper"
import Router from "next/router"
import useWindowSize from "../../lib/useWindowSize"
import map from "../../lib/image-map.json"
import ImageModal from "../ImageModal"
import Header from "../Header"

const PointsToUrl = {
  1: "/color_red2.png",
  2: "/codes2.png",
  3: "/coins2.png",
  4: "/color_and_sound2.png",
  5: "/colors_of_jobs2.png",
  6: "/decree2.png",
  7: "/DNA2.png",
  8: "/EVIL2.png",
  9: "/fixers_pic2.png",
  10: "/journal1.png",
  11: "/quiz2.png",
  12: "/RUN2.png",
  13: "/soot2.png",
}

const hoverPointsToUrl = {
  1: "/hover_highlights/color_red.png",
  2: "/hover_highlights/codes.png",
  3: "/hover_highlights/coins.png",
  4: "/hover_highlights/color_and_sound.png",
  5: "/hover_highlights/colors_of_jobs.png",
  6: "/hover_highlights/decree.png",
  7: "/hover_highlights/DNA.png",
  8: "/hover_highlights/EVIL.png",
  9: "/hover_highlights/fixers_pic.png",
  10: "/hover_highlights/journal.png",
  11: "/hover_highlights/quiz.png",
  12: "/hover_highlights/RUN.png",
  13: "/hover_highlights/soot.png",
}
const InteractiveStoryPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [baseImgUrl, setBaseImgUrl] = useState("/storytelling_ui.png")
  const { width, height } = useWindowSize()
  const [reload, setReload] = useState(false)
  const handleClick = (area, index, e) => {
    e.preventDefault()
    setImgUrl(PointsToUrl[area.name])
    setShowModal(true)
  }

  const handleMouseEnter = (area, index, e) => {
    e.preventDefault()
    setBaseImgUrl(hoverPointsToUrl[area.name])
  }

  const handleMouseLeave = (area, index, e) => {
    e.preventDefault()
    setBaseImgUrl("/storytelling_ui.png")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const mapCoordsInfinity = document
        .getElementsByTagName("map")[0]
        .areas[0]?.attributes[1]?.nodeValue?.toString()
        .includes("Infinity")

      if (mapCoordsInfinity || mapCoordsInfinity === undefined) {
        setReload(true)
      }
    }, 1000)
    return () => !reload && clearInterval(interval)
  }, [reload])

  useEffect(() => {
    if (reload) {
      Router.reload()
    }
  }, [reload])
  return (
    <>
      <Header />
      <div className="flex justify-center mt-24">
        <ImageMapper
          src={baseImgUrl}
          map={map}
          onClick={(area, index, e) => handleClick(area, index, e)}
          onMouseEnter={(area, index, e) => handleMouseEnter(area, index, e)}
          onMouseLeave={(area, index, e) => handleMouseLeave(area, index, e)}
          responsive
          height={height}
          parentWidth={width}
        />
        {showModal && (
          <ImageModal imageUrl={imgUrl} setShowModal={setShowModal} showModal={showModal} />
        )}
      </div>
    </>
  )
}

export default InteractiveStoryPage
