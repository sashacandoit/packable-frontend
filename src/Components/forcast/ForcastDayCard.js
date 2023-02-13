import React from "react"
import "./ForcastDayCard.css"
import "../styles/style.css"
import { Card, CardBody, CardSubtitle } from "reactstrap";

const ForcastDayCard = ({ tempmax, tempmin, datetime, icon }) => {
  return (
    <Card className="ForcastCard card-w-rised-img-top">
      <img
        className="ForcastCard-img card-rised-img-top mb-20"
        alt={icon}
        src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/partly-cloudy-day.png"
      />
      <CardBody>
        <CardSubtitle
          className="ForcastCard-date mb-2 text-muted"
          tag="h6"
        >
          {datetime}
        </CardSubtitle>
        <h6 className="ForcastCard-temp card-title">
          Low: {tempmin}° F <br/>
          High: {tempmax}° F
        </h6>
      </CardBody>
    </Card>

  )
}

export default ForcastDayCard;