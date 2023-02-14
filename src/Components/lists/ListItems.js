import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import { Row, Card, CardBody, Col } from "reactstrap";

const ListItems = ({ listItems, list_id }) => {

  const [items, setItems] = useState(listItems)

  async function addListItem(formData) {
    try {
      await PackableApi.addListItem(formData);
      return { success: true };
    } catch (err) {
      console.error("failed to add item", err);
      return { success: false, err };
    }
  };

  async function updateItem(formData, item_id) {
    try {
      await PackableApi.updateListItem(item_id, formData);
      return { success: true };
    } catch (err) {
      console.error("failed to add item", err);
      return { success: false, err };
    }
  };

  if (!listItems) return <LoadingSpinner />

  console.log(list_id)
  console.log(items)
  return (
    <Card>
      <CardBody>
        <AddListItemForm addListItem={addListItem} list_id={list_id} />
        <UpdateItems items={listItems} updateItem={updateItem} />
      </CardBody>
    </Card>
    

  )
}

export default ListItems;