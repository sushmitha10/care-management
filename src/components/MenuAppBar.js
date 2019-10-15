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
import PhysicianSearchBar from './PhysicianSearchBar';
import PracticeAdminSearchBar from './PracticeAdminSearchBar';
import MaterialTable from './PhysicianTable';
import PracticeAdminTable from './PracticeAdminTable';
import MultiplePhysicians from './MultiplePhysicians';
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
      },
      table: {
        marginLeft: "140px",
        marginRight: "140px",
      }
  }));
  

export default function MenuAppBar() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lastName: '',
    deanumber: '',
    practice: '',
    activeonly: false,
    search: false
  });
  const [values2, setValues2] = React.useState({
    practicename: '',
    active: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const assign = function(data) {
    setValues({ ...values, search: false })
    values.lastName=data.lastName;
    values.deanumber=data.deanumber;
    values.practice=data.practice;
    values.activeonly=data.activeonly;
    setValues({ ...values, search: true })
  }
  const assign2 = function(data2) {
    setValues2({ ...values2, search: false })
    values2.practicename=data2.practicename;
    values2.active=data2.active;
    values2.npinumber=data2.npinumber;
    setValues2({ ...values2, search: true })
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
            <PracticeAdminSearchBar value={assign2}/>
            <div className={classes.table}>
            {
             values2.search? 
            <PracticeAdminTable value={values2}/>:<div></div>
            }
            </div>

          </Route>
          <Route path="/physicianadmin">
            <PhysicianAdminContent/>
            <PhysicianSearchBar value={assign}/>
            <div className={classes.table}>
            {
             values.search? 
            <MaterialTable value={values}/>:<div></div>
            }
            </div>
          </Route>
          <Route path="/multiplephysicians">
            <MultiplePhysicians/>
          </Route>
          <Route path="/">
            <WorkListContent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
