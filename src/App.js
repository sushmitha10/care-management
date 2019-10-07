import React from "react";
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
        payload
      } = auth.currentUser();

      return (
        <div>
            <h1>
                APP 1
            </h1>
          <p>
            Welcome, {firstName} {lastName} from {city}, {country}
          </p>
            {/*<a className="App-link" href="/" >*/}
            {/*   Edit profile*/}
            {/*</a>*/}
            <p>{JSON.stringify(payload)}</p>
          {/*<p>Your favorite color is {favoriteColor}</p>*/}
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
        {
            displayUserInformation()
        }
      </header>
    </div>
  );
};

export default App;
