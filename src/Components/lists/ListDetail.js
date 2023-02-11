import React from "react"
// import "./ListDetail.css"
import "../styles/style.css"
import { Container, Col, Row } from "reactstrap";
import { Typography } from "@mui/material"

const ListDetail = () => {
  return (
    <div className="ListDetail">
      <Container>
        <Row>
          <Col className="">
          </Col>
          <Col xs="6" className="ListDetail-content">
            <Row>
              <h1 className="page-title mb-15 ListDetail-title">
                Destination Title
              </h1>
              <Typography variant="body1" gutterBottom>
                Departing: Month Day, Year
              </Typography>
            </Row>

            <Row className="">
              
            </Row>
          </Col>
          <Col className="">
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ListDetail;