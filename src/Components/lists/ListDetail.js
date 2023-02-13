import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
// import UserContext from "../auth/UserContext";
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import "./ListDetail.css"
import "../styles/style.css"
import { Container, Row, Card, CardBody, Col } from "reactstrap";
import ForcastList from "../forcast/ForcastList"

const ListDetail = () => {
  const [list, setList] = useState([])
  const { id } = useParams();

  useEffect(function getListDetails() {
    async function getList() {
      setList(await PackableApi.getListDetails(id))
    }
    getList();
  }, [id]);

  if (!list) return <LoadingSpinner />
  if (!list.days) return <LoadingSpinner />

  console.log(list)
  return (
    <Container className="ListDetail">
      <Row>
        <h2>
          {list.resolvedAddress}
        </h2>
        <h5>
          Traveling on: {list.arrival_date}
        </h5>
        <Card>
          <CardBody className="ListDetail-forcast">
            <ForcastList days={list.days} />
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