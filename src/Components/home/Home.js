import React from "react"
import "./Home.css"
import "../styles/style.css"

const Home = () => {
  return (
    <div className="Home">
      <header className="lg">
        <div className="container Home-container">
          <div className="row ">
            <div className="col-lg tablet-lg-top-30">
              <h1 className="page-title mb-15 Home-title">
                packable
              </h1>
              <h6 className="secondary-font fs-14 fw-bold mb-40">
                Login to your account to get started!
              </h6>
              <p className="fs-16 mb-40 tablet-lg-top">
                Don't have an account yet? Register for a user account to build your first packing list!
              </p>
              <a href="/register" className="btn btn-primary pill m-10 ml-0">
                <i className="fas fa-user mr-5">
                </i>Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;