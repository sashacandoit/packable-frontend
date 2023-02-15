import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import NavRoutes from "./Routes/NavRoutes"
import NavBar from "./Components/common/NavBar";
import LoadingSpinner from "./Components/common/LoadingSpinner";
import useLocalStorage from "./hooks/useLocalStorage";
import UserContext from "./Components/auth/UserContext"
import jwt from "jsonwebtoken";
import PackableApi from "./PackableApi";
import './App.css';

export const TOKEN_ID = "packable-token"


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_ID);

  /**Load User from API
   * Will not run until User logs in and has a token.
   * Will re-run when user logs out.
   */
  useEffect(function loadUser() {
    async function getCurrUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          PackableApi.token = token;
          let currUser = await PackableApi.getUser(username);
          setCurrentUser(currUser);
        } catch (err) {
          setCurrentUser(null)
        }
      }
      setDataLoaded(true);
    }
    // Set dataLoaded to false while async getCurrUser runs
    // set back to false once data is fetched or if error occurs
    setDataLoaded(false)
    getCurrUser();
  }, [token])


  /**Site-wide signup
   * 
   * Automatically logs in signed up user
   * Adds token to local storage
   */
  async function signup(formData) {
    try {
      let token = await PackableApi.signup(formData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("failed signup", err);
      return { success: false, err };
    }
  };

  /**Site-wide login
   * 
   * Adds token to local storage
   */
  async function login(formData) {
    try {
      let token = await PackableApi.login(formData);
      setToken(token);
      return { success: true };
    } catch (err) {
      console.error("failed login", err);
      return { success: false, err };
    }
  };

  /** Site-wide logout - removes token from local storage */
  async function logout() {
    setCurrentUser(null);
    setToken(null);
  };


  if (!dataLoaded) return <LoadingSpinner />


  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBar logout={logout} />
          <main>
          <NavRoutes login={login} signup={signup} logout={logout} />
          </main>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
