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
      videoRef.current.muted = !videoRef.current.muted
    }
  }, [videoRef, videoProps])

  const videoAutoPlay = () => {
    if(videoProps?.autoPlay && videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      videoRef.current.play()
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
          blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMXP2OQAGOQKc/DqDigAAAABJRU5ErkJggg=='}
          unoptimized
        />
      )}
    </div>
  )
}
export default Media
