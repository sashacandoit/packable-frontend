import React from "react"
import { Link } from "react-router-dom";
import "./ListCard.css"
import "../styles/style.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ListCard = ({ id, searched_address, arrival_date, departure_date }) => {
  return (
    <Link to={`/lists/${id}`}>
      <Card className="ListCard">
        <CardBody>
          <CardTitle tag="h5">
            {searched_address}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          </CardSubtitle>
          <CardText>
            {arrival_date}
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
    </Link>
    
  )
}

export default ListCard;