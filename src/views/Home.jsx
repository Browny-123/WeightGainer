import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/home/Home.scss";
import Signup from "./Signup";
import SignIn from "./SignIn";
export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logInOrSignUp, setLogInOrSignUp] = useState("");

  const signUpButtonClick = () => {
    setLogInOrSignUp("signup");
    setModalIsOpen(true);
  };

  const loginButtonClick = () => {
    setLogInOrSignUp("login");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="home-container">
      <div className="home-left">
        <button className="home-button" onClick={signUpButtonClick}>
          Create A New Plan
        </button>
      </div>

      <div className="home-right">
        <button className="home-button" onClick={loginButtonClick}>
          Get Exising Plan
        </button>
      </div>
      <Modal isOpen={modalIsOpen}>
        {logInOrSignUp === "signup" ? (
          <Signup closeModal={closeModal} />
        ) : (
          <SignIn closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
