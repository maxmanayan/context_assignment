import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react"
import UserColleaguesProvider, { UserColleaguesContext } from "../providers/UserColleaguesProvider";
import { UserContext } from "../providers/UserProvider";

const UserColleagueCard = ({colleague}) => {
  // const {1: Jim, 2: Pam, 3: Kevin} = useContext(UserColleaguesContext)
  return(
    <Card  style={{margin: '3em'}}>
      {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
      {/* <Image src={avatar} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{colleague.firstName} {colleague.lastName}</Card.Header>
        <Card.Meta>
          <span className='email'>{colleague.email}</span>
        </Card.Meta>
        <Card.Description>
          {colleague.jobDescription}
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <Link to='/user/colleagues'>
          <Icon name='user' />
          {firstName}'s Colleagues
        </Link>
      </Card.Content> */}
    </Card>
  )
}

export default UserColleagueCard;