import b2cauth from "react-azure-adb2c";
import decodeJWT from "jwt-decode";

class Auth {
  isLoggedIn = () => !!b2cauth.getAccessToken();

  logout = () => b2cauth.signOut();

  getToken = () => b2cauth.getAccessToken();


  currentUser = () => {
    const decoded = decodeJWT(b2cauth.getAccessToken());
   // console.log(decoded);
    return {
      name: decoded.name,
      firstName: decoded.given_name,
      lastName: decoded.family_name,
      emails: decoded.emails,
      city: decoded.city,
      country: decoded.country,
      payload: decoded
    };
  };
}

export default Auth;
