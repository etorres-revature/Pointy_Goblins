import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

const Signup = () => {
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
          <Form className="mt-2">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
