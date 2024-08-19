import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./secure/Dashboard";
import Menu from "./secure/components/Menu";
import Nav from "./secure/components/Nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./secure/Users";
import Login from "./public/Login";
import Register from "./public/Register";
function App() {
  return (
    <div className="App">
      

            <BrowserRouter>
              <Routes>
                <Route path={"/"} Component={Dashboard} />
                <Route path={'/users'} element={<Users />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/register'} element={<Register />} />
              </Routes>
            </BrowserRouter>
         
    </div>
  );
}

export default App;
