import { useContext } from "react"
import UserColleagueCard from "../components/UserColleagueCard"
import { UserColleaguesContext } from "../providers/UserColleaguesProvider"
import { UserContext } from "../providers/UserProvider"

const UserColleagues = () => {
  const {firstName} = useContext(UserContext)
  const {1: Jim,  2: Pam, 3: Kevin} = useContext(UserColleaguesContext)
  return(
    <div>
      <h1>{firstName}'s Colleagues</h1>
      <UserColleagueCard colleague={Jim}/>
      <UserColleagueCard colleague={Pam}/>
      <UserColleagueCard colleague={Kevin}/>
    </div>
  )
}

export default UserColleagues;