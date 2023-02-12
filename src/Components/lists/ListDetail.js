import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import UserContext from "../auth/UserContext";
import PackableApi from "../../PackableApi"
import "./ListDetail.css"
import "../styles/style.css"
import { Container, Row, Card, CardBody, Col } from "reactstrap";
// import ForcastList from "../forcast/ForcastList"

const ListDetail = () => {
  const [list, setList] = useState([])
  const { currentUser } = useContext(UserContext)
  const { id } = useParams();

  useEffect(function getListDetails() {
    async function getList() {
      setList(await PackableApi.getListDetails(id))
    }
    getList();
  }, [id]);

  console.log(list)
  return (
    <Container className="ListDetail">
      <Row>
        <Card>
          <CardBody className="ListDetail-forcast">
            {/* <ForcastList /> */}
            <p></p>
          </CardBody>
        </Card>
      </Row>
      
      <Row>
        <Col>
          
        </Col>
        <Col>
          
        </Col>
      </Row>
    </Container>
  )
}

export default ListDetail;