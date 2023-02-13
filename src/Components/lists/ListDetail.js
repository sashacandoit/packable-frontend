import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
// import UserContext from "../auth/UserContext";
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import "./ListDetail.css"
import "../styles/style.css"
import { Container, Row } from "reactstrap";
import ForcastList from "../forcast/ForcastList"
import ListItemForm from "./ListItemForm";
import ListItems from "./ListItems";

const ListDetail = ({addListItem}) => {
  const [list, setList] = useState([])
  const [listItems, setListItems] = useState([])
  const { id } = useParams();

  useEffect(function getListDetails() {
    async function getList() {
      let list = await PackableApi.getListDetails(id)
      setList(list)
      setListItems(list.list_items)
    }
    getList();
  }, [id, list.items]);

  if (!list) return <LoadingSpinner />
  if (!list.days) return <LoadingSpinner />

  console.log(list)
  console.log(listItems)
  return (
    <Container className="ListDetail">
      <Row>
        <h2>
          {list.resolvedAddress}
        </h2>
        <h5>
          Traveling on: {list.arrival_date}
        </h5>
        <ForcastList days={list.days} />

      </Row>
      
      <Row>
        <ListItemForm addListItem={addListItem} list_id={id} />
        <ListItems items={listItems} />
      </Row>
    </Container>
  )
}

export default ListDetail;