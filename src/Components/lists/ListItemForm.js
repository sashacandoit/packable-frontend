import React, { useState } from "react";
import "../styles/style.css"
import "./ListItemForm.css"
import { Col, Row } from "reactstrap";


const ListItemForm = ({ addToList }) => {

  const INITIAL_STATE = { category: "", item: "", qty: 0 };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    let result = await addToList(formData)
    if (result.success) {
      console.log("Success: Item Added")
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
          <Col lg="4" md="6" xs="12">
            <div className="form-group">
              <input
                id="category"
                type="select"
                name="category"
                placeholder="Category"
                className="ListItemForm-input form-control border-fade mb-10 mt-10"
                value={formData.category}
                onChange={handleChange}
              />

            </div>
          </Col>
          <Col lg="3" md="6" xs="12">
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
          <Col lg="3" md="6" xs="12">
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