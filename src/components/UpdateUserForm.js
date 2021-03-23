import { useContext, useState } from "react"
import { Button, Form } from "semantic-ui-react"
import { UserContext } from "../providers/UserProvider"

const UpdateUserForm = () => {
  const {firstName, lastName, email, jobDescription, setUser} = useContext(UserContext)
  const [profile, setProfile] = useState({firstName, lastName, email, jobDescription})

  const handleSubmit = () => {
    setUser({...profile})
  }

  const handleChange = (e, {name, value}) => {
    console.log('handledChange')
    console.log(name)
    console.log(value)
    setProfile({
      ...profile,
      [name]:value
    })
  }

  return(
    <Form onSubmit={handleSubmit} style={{margin: '3em'}}>
      <Form.Input 
        label="First Name"
        placeholder='First Name'
        name='firstName'
        value={profile.firstName}
        onChange={handleChange}
      />
      <Form.Input 
        label="Last Name"
        placeholder='Last Name'
        name='lastName'
        value={profile.lastName}
        onChange={handleChange}
      />
      <Form.Input 
        label="email"
        placeholder='email'
        name='email'
        value={profile.email}
        onChange={handleChange}
      />
      <Form.Input 
        label="Job Description"
        placeholder='Job Description'
        name='jobDescription'
        value={profile.jobDescription}
        onChange={handleChange}
      />
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default UpdateUserForm;