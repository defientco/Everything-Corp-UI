import axios from "axios"
import InputCard from "../InputCard"

const TwitterDashboard = () => {
  const handleSubmit = async (e, value: string) => {
    e.preventDefault()
    const spacesId = value.split("spaces/")[1].split("?")[0].trim()
    await axios.post("/api/twitter/addSpacesData", { ids: [spacesId] })
  }
  return (
    <div id="twitter">
      <InputCard label="Spaces URL" onSubmit={handleSubmit} buttonText="submit" />
    </div>
  )
}

export default TwitterDashboard
