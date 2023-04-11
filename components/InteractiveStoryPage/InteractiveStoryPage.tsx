import { useState } from "react"
import ImageMapper from "react-img-mapper"
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
  7: "/dna2.png",
  8: "/EVIL2.png",
  9: "/fixers_pic2.png",
  10: "/journal1.png",
  11: "/quiz2.png",
  12: "/run2.png",
  13: "/soot2.png",
}
const InteractiveStoryPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const { width, height } = useWindowSize()

  const handleClick = (area, index, e) => {
    e.preventDefault()
    console.log(area)
    setImgUrl(PointsToUrl[area.name])
    setShowModal(true)
  }

  return (
    <>
      <Header />
      <div className="flex justify-center mt-24">
        <ImageMapper
          src="/storytelling_ui.png"
          map={map}
          onClick={(area, index, e) => handleClick(area, index, e)}
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
