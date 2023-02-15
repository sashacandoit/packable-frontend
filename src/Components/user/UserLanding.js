import React, { useContext, useState, useEffect } from "react"
import UserContext from "../auth/UserContext";
import "./UserLanding.css"
import "../styles/style.css"
import { Container, Row, Card, CardBody } from "reactstrap";
import LoadingSpinner from "../common/LoadingSpinner"
import UserProfile from "./UserProfile";
import PackableApi from "../../PackableApi";
import NewListForm from "../forcast/NewListForm";
import Lists from "../lists/Lists"


const UserLanding = ({ logout }) => {

  const { currentUser } = useContext(UserContext)

  const [userLists, setUserLists] = useState([])

  useEffect(function getLists() {
    async function getLists() {
      let userLists = currentUser.lists
      setUserLists(userLists);
    }
    getLists();
  }, [currentUser]);

  /**Add new list for current user  */
  async function addList(formData) {
    try {
      const newList = await PackableApi.addList(formData);
      setUserLists(newList)
      return { success: true };
    } catch (err) {
      console.error("failed to add list", err);
      return { success: false, err };
    }
  };

  return (

    <Container className="UserLanding">

      <Row>
        <Card>
          <CardBody className="Lists-profile-header">
            <UserProfile logout={logout} />
            <NewListForm addList={addList} />
          </CardBody>
        </Card>
      </Row>
      {!userLists ? <LoadingSpinner /> :
        <Lists userLists={userLists} />}

    </Container>
  )
}

export default UserLanding;