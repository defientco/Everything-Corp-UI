import Image from 'next/image'
import { DetailedHTMLProps, VideoHTMLAttributes, useEffect, useRef } from 'react'

interface IMedia {
  id: string
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
  id,
  type,
  link,
  className,
  videoProps,
  containerClasses,
  containerStyle
}: IMedia) {
  const videoRef = useRef<any>()
  useEffect(() => {
    if(videoProps?.autoPlay) {
      videoRef.current.muted = false
    }
  }, [videoRef, videoProps])

  const videoAutoPlay = () => {
    if(videoProps?.autoPlay && videoRef.current) {
      videoRef.current.play()
      videoRef.current.muted = false
    }
  }
  
  return (
    <div
      className={`relative ${containerClasses || ''}`}
      style={containerStyle || {}}
      onClick={videoAutoPlay}
    >
      {type === 'video' && link && (
        <video
          muted
          id={id}
          className={`${className || ''}`}
          {...videoProps}
          onLoadedData={() => {
           
          }}
          ref={videoRef}
        >
          <source src={link}/>
        </video>
      )}
      {type === 'image' && link && (
        <Image 
          className='absolute w-[100%] h-[100%]'
          src={link}
          layout='fill'
          alt='not found image'
          placeholder='blur'
          blurDataURL={link}
          unoptimized
        />
      )}
    </div>
  )
}

export default Media
