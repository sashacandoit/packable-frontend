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
    <Card className="ListCard">
      <CardBody>
      <Link to={`/lists/${id}`}>
        <CardTitle className="ListCard-title" tag="h6">
          {searched_address}
          <i className="far fa-edit ml-10 sm"></i>
        </CardTitle>
      </Link>
        <CardSubtitle
          className="mb-2"
          tag="h6"
      >
      </CardSubtitle>
      <p className="ListCard-date-header mb-0 mt-20">
        Trip starts:
      </p>
      <CardText className="mt-0 mb-40">
          {formatDate(arrival_date)}
        </CardText>
      <button className="ListCard-delete-btn btn btn-xs" onClick={() => handleDelete(id)}>
          <i className="far fa-times-circle danger-hover">
          </i> delete
        </button>
      </CardBody>
    </Card>
  )
}

export default ListCard;