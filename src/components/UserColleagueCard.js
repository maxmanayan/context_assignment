import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Image } from "semantic-ui-react"
import UserColleaguesProvider, { UserColleaguesContext } from "../providers/UserColleaguesProvider";
import { UserContext } from "../providers/UserProvider";
import UpdateUserColleagueForm from "./UpdateUserColleagueForm";

const UserColleagueCard = ({colleague}) => {
  const [showUpdate, setShowUpdate] = useState(false)
  // const {1: Jim, 2: Pam, 3: Kevin} = useContext(UserColleaguesContext)
  return(
    <Card  style={{margin: '3em'}}>
      {colleague && 
      <Card.Content>
        <Card.Header>{colleague.firstName} {colleague.lastName}</Card.Header>
        <Card.Meta>
          <span className='email'>{colleague.email}</span>
        </Card.Meta>
        <Card.Description>
          {colleague.jobDescription}
        </Card.Description>
      </Card.Content>
      }
      {/* <Card.Content extra>
        <Button onClick={()=>setShowUpdate(!showUpdate)}>{showUpdate ? 'Hide' : 'Update'}</Button>
        {showUpdate && <UpdateUserColleagueForm colleague={colleague}/>}
        <Button>Delete</Button>
      </Card.Content> */}
    </Card>
  )
}

export default UserColleagueCard;