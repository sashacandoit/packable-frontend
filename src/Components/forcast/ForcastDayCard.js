import React from "react"
import { Link } from "react-router-dom";
// import "./ForcastDayCard.css"
import "../styles/style.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ForcastDayCard = ({ tempmax, tempmin, datetime, icon }) => {
  return (
    <Card className="ForcastCard">
      <img
        alt={icon}
        src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Color/partly-cloudy-day.png"
      />
      <CardBody>
        <CardTitle tag="h5">
          {datetime}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Low: {tempmin} | High: {tempmax}
        </CardSubtitle>
        {/* <CardText>
          {arrival_date}
        </CardText>
        <Button>
          Button
        </Button> */}
      </CardBody>
    </Card>

  )
}

export default ForcastDayCard;