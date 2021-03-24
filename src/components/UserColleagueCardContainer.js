import { useContext } from "react"
import UserColleagueCard from "../components/UserColleagueCard"
import { UserColleaguesContext } from "../providers/UserColleaguesProvider"

const UserColleagueCardContainer = () => {
  // const {1: Jim,  2: Pam, 3: Kevin} = useContext(UserColleaguesContext)
  const {Jim, Pam, Kevin} = useContext(UserColleaguesContext)
  
  return(
    <div>
      <UserColleagueCard colleague={Jim}/>
      <UserColleagueCard colleague={Pam}/>
      <UserColleagueCard colleague={Kevin}/>
    </div>
  )
}

export default UserColleagueCardContainer;