import React from "react"
import "./ListCard.css"
import "../styles/style.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ListCard = () => {
  return (
    <Card className="ListCard">
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
          Button
        </Button>
      </CardBody>
    </Card>
  )
}

export default ListCard;