import React from "react"
import "./ForcastList.css"
import "../styles/style.css"
import { Row, Col } from "reactstrap";
import ForcastDayCard from "./ForcastDayCard";
import LoadingSpinner from "../common/LoadingSpinner";

const ForcastList = ({ formatDate, days }) => {
  if (!days) return <LoadingSpinner />

  return (
    <Row className="ForcastList-group mt-50 mb-50" >
      {days.map(day => (

        <Col key={day.datetime} className="ForcastList-card">
          <ForcastDayCard
            formatDate={formatDate}
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