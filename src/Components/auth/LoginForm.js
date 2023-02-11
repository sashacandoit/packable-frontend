import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import "../styles/style.css"
import "./LoginForm.css"
import { Container, Col, Row } from "reactstrap";
import { Typography } from "@mui/material";

const Login = () => {

  const navigate = useNavigate();

  const INITIAL_STATE = { username: "", password: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted")
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   let result = await login(formData)
  //   if (result.success) {
  //     navigate("/");
  //   } else {
  //     setFormErrors(result.errors);
  //     console.log(formErrors)
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(login => ({ ...login, [name]: value }))
  }

  return (
    <div className="Login">
      <Container>
        <Row>
          <Col className="">
          </Col>
          <Col xs="6" className="Login-content">
            <Row>
              <h1 className="page-title mb-15 Login-title">
                Login
              </h1>
              <Typography variant="body1" gutterBottom>
                Don't have an account yet? Sign Up Here. 
              </Typography>
            </Row>

            <Row className="Login-form-section">
              <Col xs="10">
                <form className="Login-form" onSubmit={handleSubmit}>
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
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="Login-form-input form-control mb-10"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="Login-btn btn btn-primary pill m-10 ml-0">
                    Login
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

export default Login;