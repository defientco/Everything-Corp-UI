import Image from 'next/image'
import { DetailedHTMLProps, VideoHTMLAttributes } from 'react'

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
        >
          <source src={link}></source>
        </video>
      )}
      {type === 'image' && link && (
        <Image 
            className='absolute w-[100%] h-[100%]'
            src={link}
            layout='fill'
            alt='not found image'
        />
      )}
    </div>
  )
}

export default Media
