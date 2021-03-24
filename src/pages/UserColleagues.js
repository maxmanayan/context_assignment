import { useContext } from "react"
import UpdateUserColleagueForm from "../components/UpdateUserColleagueForm"
import UserColleagueCard from "../components/UserColleagueCard"
import UserColleagueCardContainer from "../components/UserColleagueCardContainer"
import { UserColleaguesContext } from "../providers/UserColleaguesProvider"
import { UserContext } from "../providers/UserProvider"

const UserColleagues = () => {
  const {firstName} = useContext(UserContext)
  // const {1: Jim, 2: Pam, 3: Kevin} = useContext(UserColleaguesContext)
  return(
    <div>
      <h1>{firstName}'s Colleagues</h1>
      <UserColleagueCardContainer />
    </div>
  )
}

export default UserColleagues;