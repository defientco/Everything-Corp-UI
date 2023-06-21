import { FC, ReactNode } from "react"
import { classNames } from "./Utils"

interface ButtonProps {
  id: string
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ id, children, className, onClick,  ...rest }) => {
  return (
    <button
      id={id}
      type="button"
      className={`hover:scale-[1.1] scale-[1] transition duration-[300ms] px-[28px] py-[11px] font-bold font-quicksand uppercase text-white dark:text-[black] rounded bg-[black] dark:bg-[white] shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)] ${className || ''}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export const PageButton: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={classNames(
      "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
      className,
    )}
    {...rest}
  >
    {children}
  </button>
)
