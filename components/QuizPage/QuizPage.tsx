import { Widget } from "@typeform/embed-react"
import { useRouter } from "next/router"

const QuizPage = () => {
  const router = useRouter()

  const onSubmit = ({ responseId }: any) => {
    router.push(`https://cre8ors.com/quiz/success?responseId=${responseId}`)
  }

  return (
    <div className="w-screen h-screen">
      <Widget
        id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
        style={{ width: "100%", height: "100%" }}
        className="my-form"
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default QuizPage
