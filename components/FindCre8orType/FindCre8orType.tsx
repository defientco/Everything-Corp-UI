import { Widget } from "@typeform/embed-react"
import { useCre8orsProvider } from "../../providers/Crea8orsProvider"

const FindCre8orType: React.FC = () => {
  const { handleQuizSubmission } = useCre8orsProvider()
  return (
    <div className="flex items-center justify-center h-screen">
      <Widget
        id={process.env.NEXT_PUBLIC_TYPEFORM_ID}
        style={{ width: "100%", height: "100%" }}
        onSubmit={handleQuizSubmission}
      />
    </div>
  )
}
export default FindCre8orType
