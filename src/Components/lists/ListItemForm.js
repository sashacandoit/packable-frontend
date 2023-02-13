import React, { useState } from "react";
import "../styles/style.css"
import "./ListItemForm.css"
import { Col, Row } from "reactstrap";


const ListItemForm = ({ addListItem, list_id }) => {

  console.log(list_id)
  const INITIAL_STATE = { category: "", item: "", qty: 0, list_id: list_id };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    let result = await addListItem(formData)
    if (result.success) {
      console.log("Success: Item Added")
      setFormData(INITIAL_STATE)
    } else {
      setFormErrors(result.errors);
      console.log(formErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  return (
    <>
      <form className="ListItemForm-form mt-30" onSubmit={handleSubmit}>
        <h6>
          Add a list item:
        </h6>
          
        <Row>
          <Col lg="3" md="6" xs="12">
            <div className="form-group">
              <select
                id="category"
                type="select"
                name="category"
                placeholder="Category"
                className="ListItemForm-input form-control custom-select border-fade mb-10 mt-10"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Clothing</option>
                <option>Accessories</option>
                <option>Documents</option>
              </select>

            </div>
          </Col>
          <Col lg="5" md="6" xs="12">
            <div className="form-group">
              <input
                id="item"
                type="text"
                name="item"
                placeholder="Item"
                className="form-control border-fade mt-10 mb-10"
                value={formData.item}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg="2" md="6" xs="12">
            <div className="form-group">
              <input
                id="qty"
                type="number"
                name="qty"
                placeholder="Quantity"
                className="form-control border-fade mt-10 mb-10"
                value={formData.qty}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg="2" md="6" xs="12">
            <button type="submit" className="ListItemForm-btn btn btn-primary-gradient m-10 ml-0">
              Add
            </button>
          </Col>
        </Row>
      </form>
    </>
  )
}

export default ListItemForm;