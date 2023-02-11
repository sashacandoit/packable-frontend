import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./Routes/NavRoutes"
import NavBar from "./Components/common/NavBar";
import jwt from "jsonwebtoken";
import PackableApi from "./PackableApi";

import './App.css';

export const TOKEN_ID = "packable-token"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* <UserContext.Provider value={{ currentUser, setCurrentUser }}> */}
          {/* <NavBar logout={logout} /> */}
          <NavBar />
          <main>
          {/* <NavRoutes login={login} signup={signup} logout={logout} /> */}
          <NavRoutes />
          </main>
        {/* </UserContext.Provider> */}
      </BrowserRouter>
    </div>
  )
}

export default App;
