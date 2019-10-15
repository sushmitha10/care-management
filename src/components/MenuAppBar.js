import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PhysicianAdminContent, { WorkListContent, PracticeAdminContent } from './Content';
import SearchBar, { PracticeAdminSearchBar } from './SearchBar';
import Table from './Table';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1, 
        display: "block",
        marginLeft: "140px",
        marginRight: "140px", 
      },
      menuButton: {
          paddingRight: "120px",
      },
      title: {
        flexGrow: 1,
      },
      appBar: {
        paddingLeft: "150px",
        position: "static",
        backgroundColor: "#FFFFFF",
        
      },
      toolBar: {
        color: "#000000", 
      }
  }));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Link to="/worklist">
              <Button color="inherit" className={classes.menuButton}>WORK LIST</Button>
            </Link>
            <Link to="/useradmin">
              <Button color="inherit" className={classes.menuButton}>USER ADMIN</Button>
            </Link>
            <Link to="/practiceadmin">
              <Button color="inherit" className={classes.menuButton}>PRACTICE ADMIN</Button>
            </Link>
            <Link to="/physicianadmin">
              <Button color="inherit" className={classes.menuButton} >PHYSICIAN ADMIN</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Switch>
          <Route path="/workList">
            <WorkListContent/>
          </Route>
          <Route path="/useradmin">
            
          </Route>
          <Route path="/practiceadmin">
            <PracticeAdminContent/>
            <PracticeAdminSearchBar/>
          </Route>
          <Route path="/physicianadmin">
            <PhysicianAdminContent/>
            <SearchBar/>
            <Table/>
          </Route>
          <Route path="/">
            <WorkListContent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
