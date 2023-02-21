import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import { useParams } from "react-router-dom";
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import LoadingSpinner from "../common/LoadingSpinner";
import { Row, Col, Card, CardBody } from "reactstrap";
import { TemperateList, ColdWeatherList, HotWeatherList } from "../helpers/calcListItems"
import { v4 as uuid } from "uuid";

const ListItems = ({forcast}) => {

  if (!forcast) return <LoadingSpinner />

  const { id } = useParams();
  const [listItems, setListItems] = useState([])

  //generates sample packing list based on forcast data and length of trip
  useEffect(function getListItems() {
    function getListItems() {
      let packingList = [];

      if (forcast[0].temp > 68) {
        packingList = HotWeatherList(forcast.length)
      }
      if (forcast[0].temp < 50) {
        packingList = ColdWeatherList(forcast.length)
      }
      else {
        packingList = TemperateList(forcast.length)
      }
      setListItems(packingList.map(obj => ({ ...obj, id: uuid() })))
    }
    getListItems();
  }, [id]);


  /**Function to add list item to current user list 
   * makes a new array with the original items and adds an object containing the new item
  */
  const addListItem = (newItem) => {
    setListItems(items => [...items, { ...newItem, id: uuid() }]);
  };


  /**Function to remove list item in current user list */
  function handleRemove(id) {
    const newListItems = listItems.filter((item) => item.id !== id);
    setListItems(newListItems);
  }


  /**Functions to update list item quantities in current list */
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

  //If user does not have any lists yet, return:
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