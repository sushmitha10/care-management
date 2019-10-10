import React from "react";
import Auth from "./Auth";
import "./App.css";
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import SearchBar from './components/SearchBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';


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
          <Header/>
          <Menu/>
          <Content/>
          <SearchBar/>
        
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
