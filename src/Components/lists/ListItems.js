import React from "react"
import "./ListItems.css"
import "../styles/style.css"
import Item from "./Item"
import { Row, Card, CardBody, Col } from "reactstrap";

const ListItems = ({ items }) => {
  console.log(items)
  return (
    <Card>
      <CardBody>
        <Row>
          <Col>
            <h6>Packing List</h6>
            <table className="ListItems-table table table-xl">
              <tbody>
                {items.map(i => (
                  <Item key={i.id} id={i.id} category={i.category} item={i.item} qty={i.qty} />
                ))}

              </tbody>
            </table>

          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default ListItems;