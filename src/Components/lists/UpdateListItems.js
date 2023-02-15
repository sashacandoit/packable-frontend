import React from "react"
import "./UpdateListItems.css"
import "../styles/style.css"
import Item from "./Item"
import LoadingSpinner from "../common/LoadingSpinner";
import { Row, Col } from "reactstrap";

const UpdateItems = ({ handleRemove, handleUpCount, handleDownCount, items }) => {

  if (!items) return <LoadingSpinner />
  console.log(items)

  return (
    <Row className="mt-10">
      <Col>
        <table className="ListItems-table table table-xl">
          <tbody>
          {items.map((item, idx) => (
              
              <Item
                key={item.id}
                handleRemove={handleRemove}
                handleUpCount={handleUpCount}
                handleDownCount={handleDownCount}
                item={item}
                idx={idx}
              />
            ))}
          </tbody>
        </table>

      </Col>
    </Row>

  )
}

export default UpdateItems;