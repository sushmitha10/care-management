import React from "react";
import logo from "./logo.svg";
import Auth from "./Auth";
import "./App.css";

function App() {
  const displayUserInformation = () => {
    const auth = new Auth();
    if (auth.isLoggedIn()) {
      console.log(auth.currentUser());
      return (
        <div>
          <p>
            Welcome, {auth.currentUser().firstName}{" "}
            {auth.currentUser().lastName} from {auth.currentUser().city},{" "}
            {auth.currentUser().country}
          </p>
          <p>Your favorite color is {auth.currentUser().favoriteColor}</p>
          <a className="App-link" href="/abc" onClick={() => auth.logout()}>
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
}

export default App;
