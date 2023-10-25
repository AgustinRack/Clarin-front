import React from "react";
import "./style/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Employees from "./components/Employess";
import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add/employee" element={<AddEmployee />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee/:id" element={<Employee />} />
      </Routes>
    </>
  );
}

export default App;
