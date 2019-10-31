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
import PhysicianAdminContent, { WorkListContent, PracticeAdminContent, UserAdminContent, PhysicianProfileContent } from './Content';
import PhysicianSearchBar from './PhysicianSearchBar';
import PracticeAdminSearchBar from './PracticeAdminSearchBar';
import MaterialTable from './PhysicianTable';
import PracticeAdminTable from './PracticeAdminTable';
import MultiplePhysicians from './MultiplePhysicians';
import UserAdminForm from './UserAdminForm';
import PhysicianProfile from './PhysicianProfile';
import { styles } from '../Stylesheet.css';
  
export default function MenuAppBar() {
  const classes = styles();
  console.log()
  const [values, setValues] = React.useState({
    lastName: '',
    npinumber: '',
    practice: '',
    activeonly: false,
    search: false
  });
  const [values2, setValues2] = React.useState({
    practicename: '',
    taxid: '',
    active: false
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const assign = function(data) {
    setValues({ ...values, search: false })
    values.lastName=data.lastName;
    values.npinumber=data.npinumber;
    values.practice=data.practice;
    values.activeonly=data.activeonly;
    setValues({ ...values, search: true })
  }
  const assign2 = function(data2) {
    setValues2({ ...values2, search: false })
    values2.practicename=data2.practicename;
    values2.active=data2.active;
    values2.taxid=data2.taxid;
    setValues2({ ...values2, search: true })
  }

  return (
    <Router>
      <div className={classes.menuAppRoot}>
        <AppBar className={classes.menuAppBar}>
          <Toolbar className={classes.menuAppToolBar}>
            <Link to="/worklist">
              <Button color="inherit" className={classes.menuAppButton}>WORK LIST</Button>
            </Link>
            <Link to="/useradmin">
              <Button color="inherit" className={classes.menuAppButton}>USER ADMIN</Button>
            </Link>
            <Link to="/practiceadmin">
              <Button color="inherit" className={classes.menuAppButton}>PRACTICE ADMIN</Button>
            </Link>
            <Link to="/physicianadmin">
              <Button color="inherit" className={classes.menuAppButton} >PHYSICIAN ADMIN</Button>
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
          <UserAdminContent/>
          <UserAdminForm/>
          </Route>
          <Route path="/practiceadmin">
            <PracticeAdminContent/>
            <PracticeAdminSearchBar value={assign2}/>
            <div className={classes.menuAppTable}>
            {
             values2.search? 
            <PracticeAdminTable value={values2}/>:<div></div>
            }
            </div>

          </Route>
          <Route path="/physicianadmin">
            <PhysicianAdminContent/>
            <PhysicianSearchBar value={assign}/>
            <div className={classes.menuAppTable}>
            {
             values.search&&
            <MaterialTable value={values}/>
            }
            </div>
          </Route>
          <Route path="/physicianprofile">
            <PhysicianProfileContent/>
            <PhysicianProfile/>
            {/* <PhysicianSearchBar value={assign}/>
            <div className={classes.menuAppTable}>
            {
             values.search&&
            <MaterialTable value={values}/>
            }
            </div> */}
          </Route>
          <Route path="/multiplephysicians">
            <PhysicianAdminContent/>
            <div className={classes.menuAppTable}>
              <MultiplePhysicians/>
            </div>
          </Route>
          <Route path="/">
            <WorkListContent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
