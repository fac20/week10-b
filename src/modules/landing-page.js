import React from "react";
import logo from "../logo2.png";
import title from "../title.png";

const LandingPage = ({ setPage }) => {
  return (
    <>
      <img src={title} alt="title" aria-label="" className="home__title  " />
      <img
        onClick={() => setPage(false)}
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <button className="home__btn" onClick={() => setPage(false)}>
        There are plenty of fish in the sea. <br /> <br />
        Which will you be?
      </button>
    </>
  );
};

export default LandingPage;
