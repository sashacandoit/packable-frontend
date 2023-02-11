import React from "react";

import "../styles/style.css"
import "./SignupForm.css"
import { Container, Col, Row } from "reactstrap";
import { Typography } from "@mui/material";

const Signup = () => {
  return (
    <div className="Signup">
      <Container>
        <Row>
          <Col className="">
          </Col>
          <Col xs="6" className="Signup-content">
            <Row>
              <h1 className="page-title mb-15 Signup-title">
                Signup
              </h1>
              <Typography variant="body1" gutterBottom>
                Already have an account yet? Login Here.
              </Typography>
            </Row>

            <Row className="Signup-btn-container">
              <a href="/login" className="Signup-btn btn btn-primary pill m-10 ml-0">
                Login
              </a>
              <a href="/register" className="Signup-btn btn btn-primary pill m-10 ml-0">
                Sign Up
              </a>
            </Row>
          </Col>
          <Col className="">
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup;