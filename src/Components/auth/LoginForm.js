import React from "react";

import "../styles/style.css"
import "./LoginForm.css"
import { Container, Col, Row } from "reactstrap";
import { Typography } from "@mui/material";

const Login = () => {
  return (
    <div className="Login">
      <Container>
        <Row>
          <Col className="">
          </Col>
          <Col xs="6" className="Login-content">
            <Row>
              <h1 className="page-title mb-15 Login-title">
                Login
              </h1>
              <Typography variant="body1" gutterBottom>
                Don't have an account yet? Sign Up Here. 
              </Typography>
            </Row>

            <Row className="Login-btn-container">
              <a href="/login" className="Login-btn btn btn-primary pill m-10 ml-0">
                Login
              </a>
              <a href="/register" className="Login-btn btn btn-primary pill m-10 ml-0">
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

export default Login;