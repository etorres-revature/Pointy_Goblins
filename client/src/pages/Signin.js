import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../utils/authContext";


const Signin = () => {
const auth = useAuth();

  const [formData, setFormData] = useState({});
  const history = useHistory();

  function updateUserCredentials(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const onSubmit = event => {
    event.preventDefault();
    auth.signin(formData.email, formData.password, () => {
      history.push("/landing");
    });

  }
//history.push("/landing");
  return (
    <Container className="mt-4">
      <div className="mb-4">
        If you need to create an account, please <Link to="/">CLICK HERE</Link>{" "}
        to access the Sign-Up form.
      </div>

      <Card.Header>
        Returning users may use this form to sign into their account:
      </Card.Header>

      <Card.Body>
        <Card.Title>SIGN-IN FORM</Card.Title>
        <Form className="mt-2">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={updateUserCredentials} value={formData.email} name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={updateUserCredentials} name="password" value={formData.password} type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" onClick={onSubmit} type="submit" block>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Container>
  );
};

export default Signin;
