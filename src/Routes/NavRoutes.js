import React, { useContext } from "react";
import UserContext from "../Components/auth/UserContext";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import Home from "../Components/home/Home";
import UserLanding from "../Components/user/UserLanding";
import ListDetail from "../Components/lists/ListDetail";
import Login from "../Components/auth/LoginForm";
import Signup from "../Components/auth/SignupForm";

function NavRoutes({ login, signup, logout }) {

  const user = useContext(UserContext);

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route exact path='/' element={<PublicRoute />}>
          <Route exact path="/" element={<Home />}></Route>
        </Route>

        <Route exact path='/login' element={<PublicRoute />}>
          <Route exact path="/login" element={<Login username="username" login={login} />}></Route>
        </Route>

        <Route exact path='/register' element={<PublicRoute />}>
          <Route exact path="/register" element={<Signup signup={signup} />}></Route>
        </Route>


        {/* Protected Routes */}
        <Route exact path='/lists' element={<ProtectedRoute />}>
          <Route exact path="/lists" element={<UserLanding logout={logout} />}></Route>
        </Route>

        <Route exact path='/lists/:id' element={<ProtectedRoute />}>
          <Route exact path="/lists/:id" element={<ListDetail id="id" user={user} />}></Route>
        </Route>

      </Routes>
    </div>
  )
}

export default NavRoutes;