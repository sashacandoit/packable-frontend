import React, { useContext } from "react"
import UserContext from "../auth/UserContext";
import "./UserLanding.css"
import "../styles/style.css"
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import LoadingSpinner from "../common/LoadingSpinner"
import UserProfile from "./UserProfile";
import ForcastForm from "../forcast/ForcastForm";
import Lists from "../lists/Lists"



const UserLanding = ({ logout, addList }) => {

  const { currentUser } = useContext(UserContext)

  return (

    <Container className="UserLanding">

      <Row>
        <Card>
          <CardBody className="Lists-profile-header">
            <UserProfile logout={logout} />
            <ForcastForm addList={addList} />
          </CardBody>
        </Card>
      </Row>

      {/* <Row className="Lists-group" lg="4" md="3" sm="2" xs="1"> */}
        {!currentUser.lists ? <LoadingSpinner /> :
          <Lists lists={currentUser.lists} />}
      {/* </Row> */}

    </Container>
  )
}

export default UserLanding;