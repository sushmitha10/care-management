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
import MaterialTable from './MaterialTable';
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
  const [values, setValues] = React.useState({
    lastName: '',
    deanumber: '',
    birthyear: '',
    activeonly: false,
    search: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const assign = function(data) {
    setValues({ ...values, search: false })
    values.lastName=data.lastName;
    values.deanumber=data.deanumber;
    values.birthyear=data.birthyear;
    values.activeonly=data.activeonly;
    setValues({ ...values, search: true })
  }

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
            <SearchBar value={assign}/>
            {
             values.search? 
            <MaterialTable value={values}/>:<div></div>
            }
          </Route>
          <Route path="/">
            <WorkListContent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
