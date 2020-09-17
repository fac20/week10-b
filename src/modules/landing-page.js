import React from "react";
import logo from "../logo.png";
import title from "../title.png";
// import FishPage from "./fight-page";

const LandingPage = ({ setPage }) => {
  return (
    <>
      <img src={title} alt="title" aria-label=""/>
      <img
        onClick={() => setPage(false)}
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <button onClick={() => setPage(false)}>
        There are plenty of fish in the sea. Which will you be?
      </button>
    </>
  );
};

export default LandingPage;
