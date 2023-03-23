const truncate = (text: string) => `${text.substring(0, 5)}...${text.substring(text.length - 4)}`

export default truncate
