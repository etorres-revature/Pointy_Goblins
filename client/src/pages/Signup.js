import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import API from "../utils/API";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const history = useHistory();

  function handleUserSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, password } = user;

    if (firstName.length && lastName.length && email.length && password.length) {
      API.createUser({
        firstName,
        lastName,
        email,
        password
      }).then(() => setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      })).then(res => {
        history.replace("/signin");
      }).catch(err => {
        console.log(err);
      })
    }
  }

  function updateUserCredentials(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Container className="mt-4">
      <div className="mb-4">
        Returning users <Link to="/signin">CLICK HERE</Link> to access the
        Sign-In form.
      </div>
      <Card>
        <Card.Header>
          New users may use this form to create their account:
        </Card.Header>
        <Card.Body>
          <Card.Title>SIGN-UP FORM</Card.Title>
          <Form className="mt-2">

            <Form.Group controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control onChange={updateUserCredentials} value={user.firstName} name="firstName" type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control onChange={updateUserCredentials} value={user.lastName} name="lastName" type="text" placeholder="Enter last name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={updateUserCredentials} value={user.email} name="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={updateUserCredentials} value={user.password} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={handleUserSubmit} variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
