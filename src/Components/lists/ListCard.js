import React from "react"
import { Link } from "react-router-dom";
import "./ListCard.css"
import "../styles/style.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ListCard = ({ id, searched_address, arrival_date, departure_date, deleteList }) => {

  return (
    // <Link to={`/lists/${id}`}>
      <Card className="ListCard">
        <CardBody>
        <Link to={`/lists/${id}`}>
          <CardTitle tag="h5">
            {searched_address}
          </CardTitle>
        </Link>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          </CardSubtitle>
          <CardText>
            {arrival_date}
          </CardText>
          <button className="ListCard-delete-btn btn btn-xs" onClick={() => deleteList(id)}>
            <i className="far fa-times-circle danger-hover">
            </i> delete
          </button>
        </CardBody>
      </Card>
    // </Link>
    
  )
}

export default ListCard;