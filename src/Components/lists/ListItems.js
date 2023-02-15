import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import { Card, CardBody } from "reactstrap";

const ListItems = ({ addListItem, updateItem, listItems, list_id }) => {

  // const [items, setItems] = useState(listItems)

  // async function addListItem(formData) {
  //   try {
  //     await PackableApi.addListItem(formData);
  //     return { success: true };
  //   } catch (err) {
  //     console.error("failed to add item", err);
  //     return { success: false, err };
  //   }
  // };


  if (!listItems) return <LoadingSpinner />

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