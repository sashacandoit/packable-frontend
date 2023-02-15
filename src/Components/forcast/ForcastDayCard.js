import React from "react"
import "./ForcastDayCard.css"
import "../styles/style.css"
import { Card, CardBody, CardSubtitle } from "reactstrap";


const ForcastDayCard = ({ formatDate, tempmax, tempmin, datetime, icon }) => {


  return (
    <Card className="ForcastCard card-w-rised-img-top">
      <img
        className="ForcastCard-img card-rised-img-top mb-20"
        alt={icon}
        src={`/icons/${icon}.png`}
      />
      <CardBody>
        <CardSubtitle
          className="ForcastCard-date mb-2 text-primary"
          tag="h6"
        >
          {formatDate(datetime)}
        </CardSubtitle>
        <p className="comment-date">
          {icon}
        </p>
        <p className="ForcastCard-temp card-title">
          Low: {tempmin}° F <br/>
          High: {tempmax}° F
        </p>
        
      </CardBody>
    </Card>

  )
}

export default ForcastDayCard;