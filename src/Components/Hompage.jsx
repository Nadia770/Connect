import { Link } from '@reach/router';
import React from 'react'
import { Form, Button} from "react-bootstrap";

export default function Hompage() {
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <Form onSubmit={(e)=>{handleSubmit(e)}}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control value ="jessjelly@connect.com" type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control value="connect123" type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Link to="/articles">
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Link>
  </Form>
  )
}
