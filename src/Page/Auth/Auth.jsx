import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Auth.module.scss";
import { Button, Form } from "react-bootstrap";
// import mySvg from "../../image/svgexport-66.svg";
import { BsChatDots } from "react-icons/bs";

const Auth = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.authWindow}>
        <Row className="m-0 p-0">
          <Row>
            <div className={styles.logo}>
              <BsChatDots />
              <h3>WiseConnect</h3>
            </div>
          </Row>
          <Form className={styles.formAuth}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </Row>
      </Row>
    </Container>
  );
};

export default Auth;
