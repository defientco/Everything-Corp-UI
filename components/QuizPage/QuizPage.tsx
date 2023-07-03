import { Widget } from "@typeform/embed-react"
import axios from "axios"
import { useRouter } from "next/router"
import { useRef } from "react"

const QuizPage = () => {
  const router = useRouter()
  const id = useRef("")

  const handleEndClick = async () =>
    router.push(`https://cre8ors.com/status?responseId=${id.current}`)

  const handleSubmit = async ({ responseId }) => {
    id.current = responseId
    await axios.post("/api/allowlist/typeform", { responseId })
  }

  return (
    <div className="w-screen h-screen">
      <Widget
        id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
        style={{ width: "100%", height: "100%" }}
        className="my-form"
        onSubmit={handleSubmit}
        onEndingButtonClick={handleEndClick}
      />
    </div>
  )
}

export default QuizPage
