import React from "react"
import "./Home.css"
import "../styles/style.css"
import { Container, Col, Row } from "reactstrap";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col className="">
          </Col>
          <Col xs="5" className="Home-content">
            <Row>
              <h1 className="page-title mb-15 Home-title">
                packable
              </h1>
              <Typography variant="body1" gutterBottom>
                Packable helps you pack smarter by generating a personalized packing list based on your destination and length of your trip. You can customize the list by adding or removing items, and save your lists to reference later!
              </Typography>
            </Row>
            
            <Row className="Home-btn-container">
              <a href="/login" className="Home-btn btn btn-primary pill m-10 ml-0">
                Login
              </a>
              <a href="/register" className="Home-btn btn btn-primary pill m-10 ml-0">
                Sign Up
              </a>
            </Row>
          </Col>
          <Col className="">
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;