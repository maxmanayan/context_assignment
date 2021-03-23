import { Button, Form } from "semantic-ui-react"

const UpdateUserForm = () => {
  return(
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>email</label>
        <input placeholder='email' />
      </Form.Field>
      <Form.Field>
        <label>Description of Role</label>
        <input placeholder='Description of Role' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}


export default UpdateUserForm;