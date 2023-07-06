/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import { FC } from "react"
import customLoader from "../../lib/customLoader"

interface ImageModalProps {
  width: number
  height: number
  imageUrl: string
  showModal: boolean
  setShowModal: (showModal: boolean) => void
}

const ImageModal: FC<ImageModalProps> = ({ imageUrl, showModal, setShowModal, width, height }) => {
  const handleClick = () => {
    setShowModal(false)
  }

  return (
    showModal && (
      <div className="fixed inset-0 z-10">
        <div className="flex items-center justify-center h-screen">
          <Image
            src={imageUrl}
            alt="Modal"
            width={width}
            height={height}
            loader={customLoader}
            onClick={handleClick}
          />
        </div>
      </div>
    )
  )
}

export default ImageModal
