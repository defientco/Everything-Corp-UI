import { useState } from "react"
import ApplicantsPage from "../../components/ApplicantsPage"
import Auth from "../../components/Auth"
import Dashboard from "../../components/Dashboard"
import TwitterDashboard from "../../components/TwitterDashboard"

const Admin = () => {
  const [screens, setScreens] = useState("applicants")
  return (
    <Auth url="/admin">
      <Dashboard setScreens={setScreens}>
        {screens === "applicants" && <ApplicantsPage />}
        {screens === "twitter" && <TwitterDashboard />}
      </Dashboard>
    </Auth>
  )
}
export default Admin
