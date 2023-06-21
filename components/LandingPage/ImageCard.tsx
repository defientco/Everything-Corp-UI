import { ReactNode } from "react"
import Media from "../../shared/Media"

interface ImageCardProps {
  width: number
  ratio: number
  link: string
  containerClassName?: string
  textClassName?: string
  text?: ReactNode
}

const ImageCard = ({
  width,
  ratio,
  link,
  containerClassName,
  textClassName,
  text,
}: ImageCardProps) => (
  <div className="relative">
    <div
      className={`${
        textClassName || ""
      } absolute z-[2] w-[100%] h-[100%] flex justify-center items-center
                text-[white] text-center leading-[34px] font-[400] font-[aldrich]
                text-[10px] samsungS8:text-[15px] sm:text-[20px]`}
    >
      {text || ""}
    </div>
    <Media
      link={link}
      type="image"
      containerClasses={containerClassName}
      containerStyle={{
        height: `${width * ratio}px`,
      }}
    />
  </div>
)

export default ImageCard
