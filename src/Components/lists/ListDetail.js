import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import "./ListDetail.css"
import "../styles/style.css"
import { Container, Row } from "reactstrap";
import ForcastList from "../forcast/ForcastList"
import ListItems from "./ListItems";

const ListDetail = () => {
  const { id } = useParams();

  const [list, setList] = useState([])
  const [listItems, setListItems] = useState([])
  const [forcast, setForcast] = useState([])
  

  useEffect(function getListAndItems() {
    async function getList() {
      let list = await PackableApi.getListDetails(id)
      setList(list);
      // if (list.list_items) {
      //   setListItems(...listItems, list.list_items)
      // }
      setListItems(...listItems, list.list_items)
    }
    getList();
  }, [id, listItems]);


  useEffect(function getListForcast() {
    async function getListForcast() {
      let forcastRes = await PackableApi.getForcast(id)
      setForcast(forcastRes);
    }
    getListForcast();
  }, [id]);

  /**Function to add list item to current user list */
  async function addListItem(formData) {
    try {
      const newItem = await PackableApi.addListItem(formData);
      setListItems(...listItems, newItem)
      return { success: true };
    } catch (err) {
      console.error("failed to add item", err);
      return { success: false, err };
    }
  };

  async function updateItem(item_id, formData) {
    try {
      const updatedItem = await PackableApi.updateListItem(item_id, formData);
      setListItems(...listItems, updatedItem)
      return { success: true };
    } catch (err) {
      console.error("failed to add item", err);
      return { success: false, err };
    }
  };

  if (!list ) return <LoadingSpinner />

  return (
    <Container className="ListDetail">
      <Row>
        <h2>
          {forcast.resolvedAddress}
        </h2>
        <h5 className="text-secondary">
          Traveling on: {list.arrival_date}
        </h5>
        <ForcastList days={forcast.days} />
      </Row>
      
      <Row>
          <ListItems addListItem={addListItem} list_id={list.id} updateItem={updateItem} />
      </Row>
    </Container>
  )
}

export default ListDetail;