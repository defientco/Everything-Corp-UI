import Image from 'next/image'
import { DetailedHTMLProps, VideoHTMLAttributes, useRef } from 'react'
import { useState } from 'react'
import Icon from './Icon'

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
  width?: number
  height?: number
}

function Media({
  id,
  type,
  link,
  className,
  videoProps,
  containerClasses,
  containerStyle,
  width,
  height
}: IMedia) {
  const videoRef = useRef<any>()
  const [isMuted, setIsMuted] = useState(true)

  const videoAutoPlay = () => {
    setIsMuted(!isMuted)
    videoRef.current.play()
  }
  
  return (
    <div
      className={`relative ${containerClasses || ''}`}
      style={containerStyle || {}}
    >
      {type === 'video' && link && (
        <>
          <video
            muted={isMuted}
            autoPlay
            id={id}
            className={`${className || ''}`}
            {...videoProps}
            ref={videoRef}
          >
            <source src={link}/>
          </video>
          <div className='absolute left-0 top-0 w-[100%] h-[100%] z-[2] rounded-[10px]
            flex justify-end items-end p-[20px]'
          >
            <button type='button' onClick={videoAutoPlay} className='bg-black rounded-full p-[10px]'>
              { isMuted ? <Icon name='unmuted' raw color='white'/> : <Icon name='muted' raw color='white'/> } 
            </button>         
          </div>
        </>
      )}
      {type === 'image' && link && (
        <Image 
          src={link}
          {...((!width && !height) ? {
            layout: 'fill'
          }: {
            width,
            height
          })}
          alt='not found image'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII='
          priority
        />
      )}
    </div>
  )
}
export default Media
