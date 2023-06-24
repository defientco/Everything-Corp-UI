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
  useEffect(() => {
    if (id) {
      const videoRef: any = document.getElementById(id)
      if(videoRef) {
        try {
          videoRef.muted = false  
        } catch(err) {
          console.log(err)
        }
      }
    }
  }, [id])
  
  return (
    <div
      className={`relative ${containerClasses || ''}`}
      style={containerStyle || {}}
    >
      {type === 'video' && link && (
        <video
          muted
          id={id}
          className={`${className || ''}`}
          {...videoProps}
          onLoadedData={() => {
           
          }}
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
        />
      )}
    </div>
  )
}

export default Media
