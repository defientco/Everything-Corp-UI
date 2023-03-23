const truncate = (text: string) =>
  text?.length > 10 ? `${text.substring(0, 5)}...${text.substring(text.length - 4)}` : text

export default truncate
