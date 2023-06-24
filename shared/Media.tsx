import Image from 'next/image'
import { DetailedHTMLProps, VideoHTMLAttributes, useEffect, useRef } from 'react'
import customLoader from '../lib/customLoader'

interface IMedia {
  type: 'video' | 'image'
  link?: string
  containerStyle?: any
  containerClasses?: string
  className?: string
  videoProps?: DetailedHTMLProps<
    VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
}

function Media({
  type,
  link,
  className,
  videoProps,
  containerClasses,
  containerStyle
}: IMedia) {
  const videoRef = useRef<any>()

  useEffect(() => {
    if(videoProps?.autoPlay && videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.autoPlay = true
    }
  }, [videoRef,  videoProps])
  
  return (
    <div
      className={`relative ${containerClasses || ''}`}
      style={containerStyle || {}}
    >
      {type === 'video' && link && (
        <video
          muted
          className={`${className || ''}`}
          {...videoProps}
          ref={videoRef}
          onLoadedData={() => {
            if(videoProps?.autoPlay) {
              videoRef.current.muted = false
              videoRef.current.autoPlay = true
            }
          }}
          src={link}
        />
      )}
      {type === 'image' && link && (
        <Image 
          className='absolute w-[100%] h-[100%]'
          src={link}
          layout='fill'
          alt='not found image'
          placeholder='blur'
          blurDataURL={link}
        />
      )}
    </div>
  )
}

export default Media
