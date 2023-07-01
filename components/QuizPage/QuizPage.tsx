import { Widget } from "@typeform/embed-react"

const QuizPage = () => (
  <div className="w-screen h-screen">
    <Widget
      id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
      style={{ width: "100%", height: "100%" }}
      className="my-form"
    />
  </div>
)

export default QuizPage
