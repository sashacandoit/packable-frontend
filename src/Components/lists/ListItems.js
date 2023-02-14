import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import { Row, Card, CardBody, Col } from "reactstrap";

const ListItems = ({ listItems, addListItem, list_id }) => {

  const [items, setItems] = useState(listItems)

  // useEffect(function getListItems() {
  //   async function getItems() {
  //     let items = await PackableApi.getItems()
  //     setListItems(...listItems, items)
  //   }
  //   getItems();
  // }, [listItems]);

  if (!listItems) return <LoadingSpinner />
  // if (!listItems) return <LoadingSpinner />

  console.log(list_id)
  console.log(items)
  return (
    <Card>
      <CardBody>
        <AddListItemForm addListItem={addListItem} list_id={list_id} />
        <UpdateItems items={listItems} />
      </CardBody>
    </Card>
    

  )
}

export default ListItems;