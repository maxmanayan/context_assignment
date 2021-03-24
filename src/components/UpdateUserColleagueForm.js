import { useContext, useState } from "react"
import { Button, Form } from "semantic-ui-react"
import { UserColleaguesContext } from "../providers/UserColleaguesProvider"

const UpdateUserColleagueForm = ({colleague}) => {
  // console.log(colleague)
  const {Jim, Pam, Kevin, setUserColleagues} = useContext(UserColleaguesContext)
  const {id, firstName, lastName, email, jobDescription} = colleague

  // console.log(id)
  const [originalObject, setOriginalObject] = useState({Jim, Pam, Kevin})
  const [card, setCard] = useState({firstName, lastName, email, jobDescription})

  // console.log(firstName)
  console.log(firstName in originalObject)

  const handleSubmit = () => {
    let getObject = firstName
    console.log(getObject)
    if (firstName in originalObject) {
      
    }
    // let updatedColleague = originalArray.key.map(oldItem=> oldItem.filter(old => old.id === id ? old : card))
    // setUserColleagues(updatedColleague)
  }

  const handleChange = (e, {name, value}) => {
    // console.log('handleChange')
    // console.log(name)
    // console.log(value)
    setCard({
      ...card,
      [name]:value
    })
  }

  return(
    <>
      {colleague && 
        <Form onSubmit={handleSubmit} style={{margin: '3em'}}>
          <Form.Input 
            label="First Name"
            placeholder='First Name'
            name='firstName'
            value={card.firstName}
            onChange={handleChange}
          />
          <Form.Input 
            label="Last Name"
            placeholder='Last Name'
            name='lastName'
            value={card.lastName}
            onChange={handleChange}
          />
          <Form.Input 
            label="email"
            placeholder='email'
            name='email'
            value={card.email}
            onChange={handleChange}
          />
          <Form.Input 
            label="Job Description"
            placeholder='Job Description'
            name='jobDescription'
            value={card.jobDescription}
            onChange={handleChange}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      }
    </>
  )
}


export default UpdateUserColleagueForm