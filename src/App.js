import React from "react";
import Auth from "./Auth";
import "./Styles.css";
import Header from './components/Header';
import MenuAppBar from './components/MenuAppBar';
import PhysicianAdminContent, { WorkListContent } from './components/Content';
import SearchBar from './components/SearchBar';

const App = () => {
 const displayUserInformation = () => {
    const auth = new Auth();
    if (auth.isLoggedIn()) {
      return (
        <div>
          <Header/>
          <MenuAppBar/>
          <WorkListContent/>
          {/* <PhysicianAdminContent/> */}
          {/* <SearchBar/> */}
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
