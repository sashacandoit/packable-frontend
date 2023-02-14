import React, {useState} from "react"
import "./ListItems.css"
import "../styles/style.css"
import Item from "./Item"
import { Row, Card, CardBody, Col } from "reactstrap";

const UpdateItems = ({ items, addItem }) => {
  console.log(items)

  const INITIAL_STATE = { items };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    let result = await addItem(formData)
    let id = result.id;
    if (result.success) {
      console.log("Success: items updated")
    } else {
      setFormErrors(result.errors);
      console.log(formErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(login => ({ ...login, [name]: value }))
  }

  return (
    <Row className="mt-10">
      <Col>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="ListItemForm-btn btn btn-primary-gradient m-10 ml-0">
            Update
          </button>
          <table className="ListItems-table table table-xl">
            <tbody>
              {items.map(i => (
                <Item
                  handleChange={handleChange}
                  key={i.id}
                  id={i.id}
                  category={i.category}
                  item={i.item}
                  qty={i.qty} />
              ))}

            </tbody>
          </table>
        </form>

      </Col>
    </Row>

  )
}

export default UpdateItems;