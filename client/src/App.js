import React, { useState } from "react";
import "./App.css";
import IndexPage from "./IndexPage";
import Layout from "./Layout";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  const [userstate, setUserState] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route
            path="profile"
            element={
              userstate && userstate._id ? (
                <Profile setUserState={setUserState} username={userstate.fname} />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          />
          <Route path="login" element={<Login setUserState={setUserState} />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
