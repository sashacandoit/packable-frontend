import React, {useState} from "react"
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
        {/* <form onSubmit={handleSubmit}>
          <button type="submit" className="ListItemForm-btn btn btn-primary-gradient m-10 ml-0">
            Update
          </button> */}
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
        {/* </form> */}

      </Col>
    </Row>

  )
}

export default UpdateItems;