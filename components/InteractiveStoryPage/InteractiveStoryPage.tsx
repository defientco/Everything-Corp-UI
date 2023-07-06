import { useState } from "react"
import ImageMapper from "react-img-mapper"
import { useMeasure } from "react-use"
import map from "../../lib/image-map.json"
import ImageModal from "../ImageModal"
import Header from "../Header"
import Audio from "../Audio"
import Footer from "../Footer"

const PointsToUrl = {
  1: "/Mysteries/Modals/color_red2.png",
  2: "/Mysteries/Modals/codes2.png",
  3: "/Mysteries/Modals/coins2.png",
  4: "/Mysteries/Modals/color_and_sound2.png",
  5: "/Mysteries/Modals/colors_of_jobs2.png",
  6: "/Mysteries/Modals/decree2.png",
  7: "/Mysteries/Modals/DNA2.png",
  8: "/Mysteries/Modals/EVIL2.png",
  9: "/Mysteries/Modals/fixers_pic2.png",
  10: "/Mysteries/Modals/journal1.png",
  11: "/Mysteries/Modals/quiz2.png",
  12: "/Mysteries/Modals/RUN2.png",
  13: "/Mysteries/Modals/soot2.png",
}

const InteractiveStoryPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [imgUrl, setImgUrl] = useState("")

  const [containerRef, { width, height }] = useMeasure()
  const [headerRef, hearderSizes] = useMeasure()
  const [footerRef, footerSizes] = useMeasure()

  const handleClick = (area, index, e) => {
    e.preventDefault()
    setImgUrl(PointsToUrl[area.name])
    setShowModal(true)
  }

  return (
    <div>
      <Header headerRef={headerRef} />
      <div
        className="flex flex-col items-center justify-center !h-screen !w-screen overflow-hidden"
        ref={containerRef}
      >
        <div className="relative">
          <div className="absolute z-[10] top-2 right-2 md:top-4 md:right-4">
            <Audio src="/map_bgm.mp3" />
          </div>
          <ImageMapper
            src="/storytelling_ui.png"
            map={map}
            onClick={(area, index, e) => handleClick(area, index, e)}
            responsive
            parentWidth={
              width > height
                ? ((height - hearderSizes.height - footerSizes.height - 64) / 2534) * 2420
                : width - 32
            }
          />
        </div>
        {showModal && (
          <ImageModal
            imageUrl={imgUrl}
            setShowModal={setShowModal}
            showModal={showModal}
            width={width > height ? (height / 4) * 3 : (width / 5) * 4}
            height={width > height ? (height / 4) * 3 : (width / 5) * 4}
          />
        )}
      </div>
      <div ref={footerRef} className="fixed bottom-0 left-0 flex justify-center w-full">
        <div
          className="relative"
          style={{
            width: `${((height - hearderSizes.height - footerSizes.height - 64) / 2534) * 2420}px`,
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default InteractiveStoryPage
