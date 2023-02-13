import React from "react"
import "../styles/style.css"
import { Row, Col } from "reactstrap";
import ForcastDayCard from "./ForcastDayCard";

const ForcastList = ({ days }) => {
  console.log(days)
  return (
    <Row className="ForcastList-group" >
      {days.map(day => (

        <Col key={day.datetime}>
          <ForcastDayCard
            tempmax={day.tempmax}
            tempmin={day.tempmin}
            datetime={day.datetime}
            icon={day.icon}
          />
        </Col>
      ))}
    </Row>

  )
}

export default ForcastList;