import { useContext } from "react"
import UpdateUserForm from "../components/UpdateUserForm"
import UserCard from "../components/UserCard"
import { UserContext } from "../providers/UserProvider"

const UserProfile = () => {
  const {firstName} = useContext(UserContext)
  return(
    <div>
      <h1>{firstName}'s Profile</h1>
      <UserCard />
      <UpdateUserForm />
    </div>
  )
}

export default UserProfile;