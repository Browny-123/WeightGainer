import React, { useState } from "react";
import ApiHandler from "../ApiHandler/ApiHandler";

export default function Signup({ closeModal, history }) {
  const [signUpData, setSignUpData] = useState({});

  const setFormData = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    console.log(signUpData);
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {}
  };

  return (
    <div>
      <h1>Sign up For Plan</h1>
      <button onClick={closeModal}>X</button>
      <form onChange={setFormData} onSubmit={submitFormData}>
        <label htmlFor="planName">Plan Name</label>
        <input type="text" name="planName" placeholder="Plan Name" />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Please enter your password"
        />
        <button>Sign up</button>
      </form>
    </div>
  );
}
