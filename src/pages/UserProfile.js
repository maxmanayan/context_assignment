import UpdateUserForm from "../components/UpdateUserForm"
import UserCard from "../components/UserCard"

const UserProfile = () => {
  return(
    <div>
      <h1>UserProfile</h1>
      <UserCard />
      <UpdateUserForm />
    </div>
  )
}

export default UserProfile;