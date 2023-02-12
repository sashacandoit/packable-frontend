import React, { useContext } from "react"
import UserContext from "../auth/UserContext";
import "./UserLanding.css"
import "../styles/style.css"
import { Container, Row, Card, CardBody } from "reactstrap";
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
      {!currentUser.lists ? <LoadingSpinner /> :
        <Lists lists={currentUser.lists} />}

    </Container>
  )
}

export default UserLanding;