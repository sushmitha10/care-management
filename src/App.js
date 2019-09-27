import React from "react";
import logo from "./logo.svg";
import Auth from "./Auth";
import "./App.css";

const App = () => {
  const displayUserInformation = () => {
    const auth = new Auth();
    if (auth.isLoggedIn()) {
      const {
        firstName,
        lastName,
        city,
        country,
        favoriteColor
      } = auth.currentUser();
      return (
        <div>
          <p>
            Welcome, {firstName} {lastName} from {city}, {country}
          </p>
          <p>Your favorite color is {favoriteColor}</p>
          <a className="App-link" href="/" onClick={() => auth.logout()}>
            Sign Out
          </a>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {displayUserInformation()}
      </header>
    </div>
  );
};

export default App;
