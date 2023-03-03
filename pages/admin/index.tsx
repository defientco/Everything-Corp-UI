import AdminPage from "../../components/AdminPage"
import LoadingPage from "../../components/LoadingPage"
import LoginPage from "../../components/LoginPage"
import { useUserProvider } from "../../providers/UserProvider"

const Admin = () => {
  const { userIsLoggedIn, user } = useUserProvider()
  return (
    <>
      {user?.loading && <LoadingPage />}
      {!userIsLoggedIn && !user?.loading && <LoginPage />}
      {userIsLoggedIn && !user?.loading && <AdminPage />}
    </>
  )
}

export default Admin
