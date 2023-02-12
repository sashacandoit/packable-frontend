import React, { useContext } from "react";
import UserContext from "../auth/UserContext";
import "./UserProfile.css"
import "../styles/style.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const UserProfile = ({logout}) => {

  const { currentUser } = useContext(UserContext)

  return (
    <>
      <h2 className="page-title mb-15 Profile-username">
        hi {currentUser.first_name}
      </h2>
      <a href="/" className="Profile-logout-link ml-20" onClick={logout}>
        Logout
      </a>
      <CardSubtitle
        className="mb-2 text-muted mt-2"
        tag="h6"
      >
        You have {(currentUser.lists).length} packing lists
      </CardSubtitle>
                
    </>
  )
}

export default UserProfile;