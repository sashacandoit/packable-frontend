import React from "react"
import "./Lists.css"
import "../styles/style.css"
import { Container, Row, Col, CardGroup } from "reactstrap";
import { Typography } from "@mui/material"
import ListCard from "./ListCard"

const Lists = () => {

  return (

    <Container className="Lists">

      <Row className="Lists-header">
        <Col className="left-area left-aligned tablet-center">
          <h2 className="page-title mb-15 Lists-username">
            hi Sasha
          </h2>
        </Col>
      
        <Col className="right-area right-aligned tablet-center">
          <h4 className="page-title mb-15 Lists-form-title">
            add a new list
          </h4>
        </Col>
      </Row>

      <Row className="Lists-group" lg="4" md="3" sm="2" xs="1">
        <Col >
          <ListCard />
        </Col>
        <Col >
          <ListCard />
        </Col>
        <Col >
          <ListCard />
        </Col>
        <Col >
          <ListCard />
        </Col>
      </Row>

      
      {/* <div className="row">
        <div className="col-md-3">
          <ListCard></ListCard>
        </div>
        <div className="col-md-3">
          <ListCard></ListCard>
        </div>
        <div className="col-md-3">
          <ListCard></ListCard>
        </div>
        <div className="col-md-3">
          <ListCard></ListCard>
        </div>

      </div> */}

    </Container>
  )
}

export default Lists;