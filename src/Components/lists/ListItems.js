import React, {useState, useEffect} from "react"
import "./ListItems.css"
import "../styles/style.css"
import { useParams } from "react-router-dom";
import PackableApi from "../../PackableApi"
import AddListItemForm from "./AddListItemForm";
import UpdateItems from "./UpdateListItems";
import LoadingSpinner from "../common/LoadingSpinner";
import { Row, Col, Card, CardBody } from "reactstrap";

const ListItems = () => {

  const { id } = useParams();
  const [listItems, setListItems] = useState([])

  useEffect(function getListItems() {
    async function getListItems() {
      let items = await PackableApi.getItems(id)
      setListItems(items);
    }
    getListItems();
  }, [id]);

  /**Function to add list item to current user list */
  async function addListItem(formData) {
    try {
      const newItem = await PackableApi.addListItem(id, formData);
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
        <UpdateItems items={listItems} updateItem={updateItem} />}
      </CardBody>
    </Card>
  )
}

export default ListItems;