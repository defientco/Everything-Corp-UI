import Image from 'next/image'
import { DetailedHTMLProps, VideoHTMLAttributes, useEffect, useRef } from 'react'
import { useState } from 'react'

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
  const [loaded, setLoaded] = useState(false)

  const videoAutoPlay = () => {
    if(videoRef.current) {
      videoRef.current.muted = loaded ? !videoRef.current.muted : false
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
          autoPlay
          id={id}
          className={`${className || ''}`}
          {...videoProps}
          onLoadedData={() => {
           setLoaded(true)
          }}
          onLoadedMetadata={() => {
            setLoaded(true)
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
