import React, { useState } from "react";

export default function SignIn({ closeModal }) {
  return (
    <div>
      <h1>Please enter your credentials to obtain your Plan</h1>
      <button onClick={closeModal}>X</button>
      <form></form>
    </div>
  );
}
