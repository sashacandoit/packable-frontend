import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./Routes/NavRoutes"
// import NavBar from "./common/NavBar";
import jwt from "jsonwebtoken";
import PackableApi from "./PackableApi";

import './App.css';

export const TOKEN_ID = "packable-token"


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          {/* <UserContext.Provider value={{ currentUser, setCurrentUser }}> */}
            {/* <NavBar logout={logout} /> */}
            <main>
            {/* <NavRoutes login={login} signup={signup} logout={logout} /> */}
            <NavRoutes />
            </main>
          {/* </UserContext.Provider> */}
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App;
