import React from "react"
import { Link } from "react-router-dom";
import "./ListCard.css"
import "../styles/style.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import moment from 'moment'


const ListCard = ({ id, searched_address, arrival_date, departure_date, handleDelete }) => {

  const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY')
  }

  return (
    // <Link to={`/lists/${id}`}>
      <Card className="ListCard">
        <CardBody>
        <Link to={`/lists/${id}`}>
          <CardTitle className="ListCard-title" tag="h6">
            {searched_address}
            <i className="far fa-edit ml-10 sm"></i>
          </CardTitle>
        </Link>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          </CardSubtitle>
          <CardText>
            {formatDate(arrival_date)}
          </CardText>
        <button className="ListCard-delete-btn btn btn-xs" onClick={() => handleDelete(id)}>
            <i className="far fa-times-circle danger-hover">
            </i> delete
          </button>
        </CardBody>
      </Card>
    // </Link>
    
  )
}

export default ListCard;