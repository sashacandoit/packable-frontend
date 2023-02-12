import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/style.css"
import "./SignupForm.css"
import { Container, Col, Row } from "reactstrap";
import { Typography } from "@mui/material";

const Signup = ({signup}) => {

  const navigate = useNavigate();

  const INITIAL_STATE = { first_name: "Sasha", last_name: "Czerniawski", username: "sashacandoit", email: "sasha@email.com", password: "password" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData)
    if (result.success) {
      navigate("/");
      console.log(`Success:`, formData)
    } else {
      setFormErrors(result.errors);
      console.log(formErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(signup => ({ ...signup, [name]: value }))
  }

  return (
    <div className="Signup">
      <Container>
        <Row>
          <Col className="">
          </Col>
          <Col xs="6" className="Signup-content">
            <Row>
              <h1 className="page-title mb-15 Signup-title">
                Signup
              </h1>
              <Typography variant="body1" gutterBottom>
                Already have an account yet? Login Here.
              </Typography>
            </Row>

            <Row className="Signup-form-section">
              <Col xs="10">
                <form className="Signup-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col lg="6" md="12" xs="12">
                      <div className="form-group">
                        <input
                          id="first_name"
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          className="Login-form-input form-control mb-10"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                        
                      </div>
                    </Col>
                    <Col lg="6" md="12" xs="12">
                      <div className="form-group">
                        <input
                          id="last_name"
                          type="text"
                          name="last_name"
                          placeholder="Last name"
                          className="Login-form-input form-control mb-10"
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </Col>
                  </Row>
                  
                  <div className="form-group">
                    <input
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="Login-form-input form-control mb-10"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="Login-form-input form-control mb-10"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="Signup-form-input form-control mb-10"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="Signup-btn btn btn-primary pill m-10 ml-0">
                    Signup
                  </button>
                </form>
              </Col>
            </Row>
          </Col>
          <Col className="">
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup;