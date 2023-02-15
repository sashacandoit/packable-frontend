import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import { Row, Col, Card, CardBody } from "reactstrap";

const ListItems = ({ addListItem, updateItem, listItems, list_id }) => {

  const NoListItems = () => {
    return (
      <Row>
        <Col>
          <p className="lead">No List Items Yet!</p>
        </Col>
      </Row>
    )
  }

  return (
    <Card>
      <CardBody>
        <AddListItemForm addListItem={addListItem} list_id={list_id} />
        {!listItems ? <NoListItems /> :
        <UpdateItems items={listItems} updateItem={updateItem} />}
      </CardBody>
    </Card>
  )
}

export default ListItems;