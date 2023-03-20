import BackToRoadmapButton from "../BackToRoadmapButton"
import faq from "../../lib/faq.json"

const FaqPage = () => (
  <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
    <BackToRoadmapButton textColor="#000000" />
    <div className="w-[50vw] flex flex-col gap-3 text-white">
      <div className="text-4xl">FAQ</div>
      {faq.map((item) => (
        <div key={item.title}>
          <div className="text-xl font-bold">{item.title}</div>
          <div className="text-md">{item.description}</div>
        </div>
      ))}
    </div>
  </div>
)

export default FaqPage
