import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import styled from "./register.module.css";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("form");
    if(handleValidation()){
        const {email, password, confirmPassword, password}=values;
        
    }
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error("password and confirm password is not page", toastOptions);
        return false;
    }
    return true;
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      {/* <h1>Lata</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="brand">
          <img src="" alt=""></img>
          <h1>snappy</h1>
        </div>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="confirmPassword"
          name="confirmPassword"
          onChange={handleChange}
        ></input>
        <button type="submit">Register</button>
        <span>
          {" "}
          Already have an accont ? <Link to="/login">Login </Link>{" "}
        </span>
      </form>
      <ToastContainer></ToastContainer>
    </>
  );
}
