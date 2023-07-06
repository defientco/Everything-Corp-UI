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
      <div className="absolute z-10 left-0 top-0 w-[100%] h-[100%] flex items-center justify-center">
        <Image
          src={imageUrl}
          alt="Modal"
          width={width}
          height={height}
          loader={customLoader}
          onClick={handleClick}
        />
      </div>
    )
  )
}

export default ImageModal
