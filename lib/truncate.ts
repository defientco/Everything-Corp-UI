const truncate = (text: string) =>
  text?.includes?.("0x") ? `${text.substring(0, 5)}...${text.substring(text.length - 4)}` : text

export default truncate
