import React, { useContext } from "react"
import UserContext from "../auth/UserContext";
import "./Lists.css"
import "../styles/style.css"
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import UserProfile from "../user/UserProfile";
import ForcastForm from "../forcast/ForcastForm";
import ListCard from "./ListCard"

const Lists = ({ logout }) => {
  
  const {currentUser} = useContext(UserContext)

  return (

    <Container className="Lists">

      <Row>
        <Card>
          <CardBody className="Lists-profile-header">
            <UserProfile logout={logout} />
            <ForcastForm />
          </CardBody>
        </Card>
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