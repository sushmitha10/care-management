import React from "react";
import ReactDOM from "react-dom";
import b2cauth from "react-azure-adb2c";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

b2cauth.initialize({
  instance: process.env.REACT_APP_INSTANCE,
  tenant: process.env.REACT_APP_TENANT,
  signInPolicy: process.env.REACT_APP_SIGN_IN_POLICY,
  applicationId: process.env.REACT_APP_APPLICATION_ID,
  cacheLocation: "localStorage",
  scopes: [process.env.REACT_APP_SCOPE],
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  postLogoutRedirectUri: window.location.origin
});

b2cauth.run(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
  serviceWorker.unregister();
});
