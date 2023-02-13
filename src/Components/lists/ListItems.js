import React, { useState, useEffect } from "react"
import "./ListItems.css"
import "../styles/style.css"
import { Row, Card, CardBody, Col } from "reactstrap";

const ListItems = ({ items }) => {
  console.log(items)
  return (
    <Card>
      <CardBody>
        <Row>
          <Col>
            <Card className="ListItems-section-tall">
              <CardBody>
                <h6>Clothing</h6>

                <ul className="list-unstyled list-icon list-arrow list-info">
                  <li>
                    T-Shirts - <b>4</b>
                  </li>
                  <li>
                    Shorts - <b>2</b>
                  </li>
                  <li>
                    Skirts - <b>2</b>
                  </li>
                </ul>

              </CardBody>
            </Card>

          </Col>
          <Col>
            <Card className="ListItems-section">
              <CardBody>
                <h6>Accessories</h6>

                <ul className="list-unstyled list-icon list-arrow list-info">
                  <li>
                    Scarf - <b>1</b>
                  </li>
                  <li>
                    Hat - <b>1</b>
                  </li>
                  <li>
                    Gloves - <b>1</b>
                  </li>
                </ul>
              </CardBody>

            </Card>
            <Card className="ListItems-section">
              <CardBody>
                <h6>Documents</h6>

                <ul className="list-unstyled list-icon list-arrow list-info">
                  <li>
                    Passport - <b>1</b>
                  </li>
                  <li>
                    Vaccination Card - <b>1</b>
                  </li>
                </ul>
              </CardBody>

            </Card>

          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ListItems;