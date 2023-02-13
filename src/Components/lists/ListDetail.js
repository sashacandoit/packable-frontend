import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
// import UserContext from "../auth/UserContext";
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import "./ListDetail.css"
import "../styles/style.css"
import { Container, Row, Card, CardBody, Col } from "reactstrap";
import ForcastList from "../forcast/ForcastList"
import ListItemForm from "./ListItemForm";

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
        <ForcastList days={list.days} />

      </Row>
      
      <Row>
        <ListItemForm />
        <Card>
          <CardBody>
            <Row>
              <Col>
                <Card className="ListDetail-item-list-tall">
                  <CardBody>
                    <h6>Clothing</h6>

                    <ul className="list-unstyled list-icon list-arrow list-info">
                      <li>
                        T-Shirts - <b>4</b>
                      </li>
                      <li>
                        Shorts - <b>2</b>
                      </li>
                      <li>
                        Skirts - <b>2</b>
                      </li>
                    </ul>

                  </CardBody>
                </Card>

              </Col>
              <Col>
                <Card className="ListDetail-item-list">
                  <CardBody>
                    <h6>Accessories</h6>

                    <ul className="list-unstyled list-icon list-arrow list-info">
                      <li>
                        Scarf - <b>1</b>
                      </li>
                      <li>
                        Hat - <b>1</b>
                      </li>
                      <li>
                        Gloves - <b>1</b>
                      </li>
                    </ul>
                  </CardBody>

                </Card>
                <Card className="ListDetail-item-list">
                  <CardBody>
                    <h6>Documents</h6>

                    <ul className="list-unstyled list-icon list-arrow list-info">
                      <li>
                        Passport - <b>1</b>
                      </li>
                      <li>
                        Vaccination Card - <b>1</b>
                      </li>
                    </ul>
                  </CardBody>

                </Card>

              </Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </Container>
  )
}

export default ListDetail;