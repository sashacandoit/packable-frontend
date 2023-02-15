import React, {useState} from "react"
import "./UpdateListItems.css"
import "../styles/style.css"
import Item from "./Item"
import LoadingSpinner from "../common/LoadingSpinner";
import { Row, Col } from "reactstrap";

const UpdateItems = ({ handleRemove, handleUpCount, handleDownCount, items }) => {
  // let itemsArr = Object.values(items)
  // console.log(itemsArr)

  // const INITIAL_STATE = items ;
  // const [formData, setFormData] = useState(INITIAL_STATE);
  // const [formErrors, setFormErrors] = useState([]);

  // localStorage.setItem('items', JSON.stringify(formData))


  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   let localItems = JSON.parse(localStorage.getItem('items'))

  //   for (let item of localItems) {
  //     let result = await updateItem(item.id, item.qty)
  //     if (result.success) {
  //       console.log("Success: items updated")
  //     } else {
  //       setFormErrors(result.errors);
  //       console.log(formErrors)
  //     }
  //   }
  // }

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