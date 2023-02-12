import React, { useContext } from "react"
import "./Lists.css"
import "../styles/style.css"
import { Container, Row, Col } from "reactstrap";
// import UserProfile from "../user/UserProfile";
// import ForcastForm from "../forcast/ForcastForm";
import ListCard from "./ListCard"

const Lists = ({ lists }) => {
  return (

    <Row className="Lists-group" >
      {lists.map(list => (
        <Col key={list.id}>
          <ListCard
            id={list.id}
            searched_address={list.searched_address}
            arrival_date={list.arrival_date}
            departure_date={list.departure_date}
          />
        </Col>
      ))}
    </Row>

  )
}

export default Lists;