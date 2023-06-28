import { ReactNode, useState } from "react"
import Media from "../../shared/Media"

interface ImageCardProps {
  id: string
  width: number
  ratio: number
  link: string
  containerClassName?: string
  textClassName?: string
  text?: ReactNode
  revealText?: ReactNode
}

const ImageCard = ({
  id,
  width,
  ratio,
  link,
  containerClassName,
  textClassName,
  text,
  revealText,
}: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        height: `${width * ratio}px`,
      }}
    >
      <div
        className={`absolute z-[2] w-full h-full flex justify-center items-center
                  rounded-[10px]
                  text-[white] text-center leading-[34px] font-[400] font-[aldrich]
                  text-[10px] samsungS8:text-[15px] sm:text-[20px] ${textClassName || ""} ${
          revealText && isHovered ? "backdrop-blur-[3.5px]" : ""
        }`}
      >
        {revealText ? !isHovered && (text || "") : text}
        {(isHovered && revealText) || ""}
      </div>
      <Media
        id={id}
        link={link}
        type="image"
        containerClasses={`${
          revealText && isHovered ? "opacity-[0.3]" : "opacity-[1]"
        } ${containerClassName}`}
        containerStyle={{
          height: `${width * ratio}px`,
        }}
        width={width}
        height={width * ratio}
      />
    </div>
  )
}

export default ImageCard
