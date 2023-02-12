import React from "react"
import "./Lists.css"
import "../styles/style.css"
import { Row, Col } from "reactstrap";

import ListCard from "./ListCard"

const Lists = ({ lists }) => {
console.log(lists)
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