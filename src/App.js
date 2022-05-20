import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import Error404 from "./pages/Error404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const access_token = localStorage.getItem("token");
  const [user_data, setUserData] = useState({});

  async function getUserData() {
    setUserData(
      await axios.get("http://localhost:8000/api/profile", {
        Bearer: access_token,
      })
    );
    console.log(user_data);
  }

  if (access_token !== null) {
    getUserData();
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage access_token={access_token} user_data={user_data} />
            }
          />
          <Route
            path="*"
            element={
              <Error404 access_token={access_token} user_data={user_data} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
