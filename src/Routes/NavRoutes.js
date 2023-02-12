import React from "react";
import { Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

import Home from "../Components/home/Home";
import Lists from "../Components/lists/Lists";
// import ForcastForm from "../Components/forcast/ForcastForm";
import UserProfile from "../Components/user/UserProfile";
import Login from "../Components/auth/LoginForm";
import Signup from "../Components/auth/SignupForm";

function NavRoutes({ login, signup, logout }) {

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login username="username" login={login} />}></Route>
        <Route exact path="/register" element={<Signup signup={signup} />}></Route>


        {/* Protected Routes */}
        {/* <Route exact path="/users/:username" element={<UserProfile username="username" logout={logout} />}></Route> */}
        {/* <Route exact path="/lists/:id" element={<Lists id="id" />}></Route> */}
        <Route exact path="/lists" element={<Lists logout={logout} />}></Route>

        {/* <Route exact path='/users/:username' element={<PrivateRoute />}>
          <Route exact path="/users/:username" element={<UserProfile username="username" logout={logout} />}></Route>
        </Route> */}

      </Routes>
    </div>
  )
}

export default NavRoutes;