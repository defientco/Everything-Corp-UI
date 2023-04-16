import AdminPage from "../../components/AdminPage"
import Auth from "../../components/Auth"

const Admin = () => (
  <Auth url="/admin">
    <AdminPage />
  </Auth>
)

export default Admin
