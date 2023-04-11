/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef } from "react"

const ImageModal = ({ imageUrl, showModal, setShowModal }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      }
    }

    window.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [modalRef, setShowModal])
  return (
    showModal && (
      <div className="fixed inset-0 z-10 mt-24 overflow-y-auto">
        <div className="flex items-center justify-center w-full min-h-screen px-4">
          <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg max-h-2xl bg-none">
            <img src={imageUrl} alt="Modal" className="object-contain w-full" ref={modalRef} />
          </div>
        </div>
      </div>
    )
  )
}

export default ImageModal
