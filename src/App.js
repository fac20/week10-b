import React from "react";
import "./App.css";
import LandingPage from "./modules/landing-page";
import FightPage from "./modules/fight-page";

function App() {
  const [page, setPage] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        {page ? <LandingPage setPage={setPage} /> : <FightPage />}
      </body>
    </div>
  );
}

export default App;
