import React from "react";
import logo from "Sword-Fish-Fencing.png";

const LandingPage = () => {
  return (
    <>
      <h1>Fish Fight!</h1>
      <img
        onClick={/*generate fight page with first fish*/}
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <button onClick={/*generate fight page with first fish*/}>
        There are plenty of fish in the sea. Which will you be?
      </button>
    </>
  );
};

export default LandingPage;
