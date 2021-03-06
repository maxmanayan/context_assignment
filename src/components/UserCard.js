import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react"
import { UserContext } from "../providers/UserProvider";

const UserCard = () => {
  const {firstName, lastName, email, jobDescription, avatar} = useContext(UserContext)
  return(
    <Card  style={{margin: '3em'}}>
      {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
      <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{firstName} {lastName}</Card.Header>
        <Card.Meta>
          <span className='email'>{email}</span>
        </Card.Meta>
        <Card.Description>
          {jobDescription}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to='/user/colleagues'>
          <Icon name='user' />
          {firstName}'s Colleagues
        </Link>
      </Card.Content>
    </Card>
  )
}

export default UserCard;