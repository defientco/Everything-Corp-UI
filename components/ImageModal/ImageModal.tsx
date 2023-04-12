/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import customLoader from "../../lib/customLoader"

const ImageModal = ({ imageUrl, showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false)
  }

  return (
    showModal && (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 mx-auto mt-24">
          <Image
            src={imageUrl}
            alt="Modal"
            width={900}
            height={900}
            loader={customLoader}
            onClick={handleClick}
          />
        </div>
      </div>
    )
  )
}

export default ImageModal
