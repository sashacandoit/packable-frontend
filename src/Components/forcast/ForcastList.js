import React from "react"
import "./ForcastList.css"
import "../styles/style.css"
import { Row, Col } from "reactstrap";
import ForcastDayCard from "./ForcastDayCard";
import LoadingSpinner from "../common/LoadingSpinner";

const ForcastList = ({ days }) => {
  if (!days) return <LoadingSpinner />

  return (
    <Row className="ForcastList-group" >
      {days.map(day => (

        <Col key={day.datetime} className="ForcastList-card">
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