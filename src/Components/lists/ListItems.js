import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import { useParams } from "react-router-dom";
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import LoadingSpinner from "../common/LoadingSpinner";
import { Row, Col, Card, CardBody } from "reactstrap";
import { v4 as uuid } from "uuid";

const ListItems = () => {

  const { id } = useParams();
  const INITIAL_STATE = [
    { category: "Clothing", item: "socks", qty: 4, id: uuid(), list_id: id },
    { category: "Accessories", item: "sunglasses", qty: 1, id: uuid(), list_id: id },
    { category: "Documents", item: "passport", qty: 1, id: uuid(), list_id: id }
    /** add function for getting starter list data */
  ]

  const [listItems, setListItems] = useState(INITIAL_STATE)

  // useEffect(function getListItems() {
  //   async function getListItems() {
  //     let items = await PackableApi.getItems(id)
  //     setListItems(items);
  //   }
  //   getListItems();
  // }, [id]);


  /**Function to add list item to current user list */

  const addListItem = (newItem) => {
    setListItems(items => [...items, { ...newItem, id: uuid() }]);
    //makes a new array with the original items and adds an object containing the new item
  };

  // async function addListItem(formData) {
  //   try {
  //     const newItem = await PackableApi.addListItem(id, formData);
  //     setListItems(items => [...items, newItem])
  //     return { success: true };
  //   } catch (err) {
  //     console.error("failed to add item", err);
  //     return { success: false, err };
  //   }
  // };

  /**Function to update list item in current user list */
  // async function updateItem(item_id, formData) {
  //   try {
  //     const updatedItem = await PackableApi.updateListItem(item_id, formData);
  //     setListItems(items => [...items, updatedItem])
  //     return { success: true };
  //   } catch (err) {
  //     console.error("failed to add item", err);
  //     return { success: false, err };
  //   }
  // };

  /**Function to remove list item in current user list */
  function handleRemove(id) {
    const newListItems = listItems.filter((item) => item.id !== id);
    setListItems(newListItems);
  }


  /**Functions to update list items in current user list */
  function handleUpCount(index) {
    const upCountItems = listItems.map((item, idx) => {
      if (idx === index) {
        let qty = item.qty + 1
        return {...item, qty:qty}
      }
      return item
    })
    setListItems(upCountItems);
  }

  function handleDownCount(index) {
    const downCountItems = listItems.map((item, idx) => {
      if (idx === index) {
        let qty = item.qty - 1
        return { ...item, qty: qty }
      }
      return item
    })
    setListItems(downCountItems);
  }


  // async function deleteItem(item_id) {
  //   try {
  //     await PackableApi.deleteListItem(item_id);
  //     setListItems(listItems)
  //     return { success: true };
  //   } catch (err) {
  //     console.error("failed to delete item", err);
  //     return { success: false, err };
  //   }
  // };


  const NoListItems = () => {
    return (
      <Row>
        <Col>
          <p className="lead">No List Items Yet!</p>
        </Col>
      </Row>
    )
  }

  if (!listItems) return <LoadingSpinner />

  return (
    <Card>
      <CardBody>
        <AddListItemForm addListItem={addListItem} />
        {listItems.length === 0 ? <NoListItems /> :
          <UpdateItems handleRemove={handleRemove} items={listItems} handleUpCount={handleUpCount} handleDownCount={handleDownCount} />}
      </CardBody>
    </Card>
  )
}

export default ListItems;