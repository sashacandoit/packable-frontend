import React from "react"
import "./Lists.css"
import "../styles/style.css"
import { Row, Col } from "reactstrap";
import ListCard from "./ListCard"

const Lists = ({ userLists, handleDelete }) => {

  return (
    <Row className="Lists-group" >
      {userLists.map(list => (
        
        <Col className="col-md-3" key={list.id}>
          <ListCard
            id={list.id}
            searched_address={list.searched_address}
            arrival_date={list.arrival_date}
            departure_date={list.departure_date}
            handleDelete={handleDelete}
          />
        </Col>
      ))}
    </Row>
  )
}

export default Lists;