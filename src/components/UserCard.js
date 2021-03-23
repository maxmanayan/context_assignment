import { Card, Icon, Image } from "semantic-ui-react"

const UserCard = () => {
  return(
    <Card>
      <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>firstName lastName</Card.Header>
        <Card.Meta>
          <span className='email'>email</span>
        </Card.Meta>
        <Card.Description>
          Description of Role
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Update
        </a>
      </Card.Content>
    </Card>
  )
}

export default UserCard;