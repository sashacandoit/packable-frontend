import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/style.css"
import "./NewListForm.css"
import { Col, Row } from "reactstrap";


const NewListForm = ({addList}) => {

  const navigate = useNavigate();

  const INITIAL_STATE = { searched_address: "", arrival_date: "", departure_date: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    let result = await addList(formData)
    console.log(result)
    if (result.id) {
      navigate(`/lists/${result.id}`);
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
    <>
      <form className="Forcast-form mt-30" onSubmit={handleSubmit}>
        <h6>
          add a new list
        </h6>
        <Row>
          <Col lg="4" md="6" xs="12">
            <div className="form-group">
              <input
                id="searched_address"
                type="text"
                name="searched_address"
                placeholder="Location"
                className="ForcastForm-form-input form-control mb-10 mt-10"
                value={formData.searched_address}
                onChange={handleChange}
              />

            </div>
          </Col>
          <Col lg="3" md="6" xs="12">
            <div className="form-group">
              <input
                id="arrival_date"
                type="date"
                name="arrival_date"
                placeholder="Arrival date"
                className="form-control mt-10 mb-10"
                value={formData.arrival_date}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg="3" md="6" xs="12">
            <div className="form-group">
              <input
                id="departure_date"
                type="date"
                name="departure_date"
                placeholder="Departure date"
                className="form-control mt-10 mb-10"
                value={formData.departure_date}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col lg="2" md="6" xs="12">
            <button type="submit" className="AddListItemForm-btn btn btn-primary m-10 ml-0">
              Go!
            </button>
          </Col>
        </Row>
      </form>
    </>
  )
}

export default NewListForm;