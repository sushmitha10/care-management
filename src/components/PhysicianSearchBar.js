import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import DropzoneDialog from './fileUpload';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { styles } from '../Stylesheet.css';
import FormControl from '@material-ui/core/FormControl';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function PhysicianSearchBar(props) {
  const [values, setValues] = React.useState({
    lastName: '',
    npinumber: '',
    practice: '',
    activeonly: false,
  });

  const handleChange = name => event => {
    event.preventDefault()
    setValues({ ...values, [name]: event.target.value });
  };
  const handleClick=function() {
    props.value(values)
    
  };
  const classes = styles();
  return (
    <div className={classes.searchRoot}>
      <AppBar position="static" className={classes.searchAppBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.searchTitle}>
            Physician Search
          </Typography>
          </Grid>
          <Grid item xs={3}>
            <DropzoneDialog/>
          </Grid>
          <Grid item xs={3}>
          <Link to="/physicianprofile">
              <Button color="inherit" className={classes.searchAddButton} >ADD PHYSICIAN</Button>
            </Link>
          </Grid>
        
        </Toolbar>
      </AppBar>
   
    <Card className={classes.searchLogo}>
    <Toolbar className={classes.searchToolbar}> 
    <Grid item xs={4}>
      <TextField
        id="standard-name"
        label="Last Name"
        className={classes.searchTextField}
        value={values.lastName}
        onChange={handleChange('lastName')}
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
      <TextField
        id="standard-name"
        label="NPI Number"
        className={classes.searchTextField}
        value={values.npinumber}
        onChange={handleChange('npinumber')}
        margin="normal"
      />
      </Grid>
    
      <Grid item xs={4}>
      <FormControl className={classes.searchFormControl}>
      <InputLabel htmlFor="practice">Practice</InputLabel>
        <Select
          value={values.practice}
          onChange={handleChange('practice')}
          inputProps={{
            name: 'Practice',
            id: 'practice',
          }}
        >
          <MenuItem value={'Wheaton Franciscan Medical Group'}>Wheaton Franciscan Medical Group</MenuItem>
          <MenuItem value={'St. Vincents Ambulatory Care, Inc.'}>St. Vincents Ambulatory Care, Inc.</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={4}>
        <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange('activeonly')}
            value={values.activeonly}
            color="primary"
          />
        }
        label="Active Only"
      />
      </Grid>
   
      <Grid item xs={2}>
      <Button onClick={handleClick} className={classes.searchAddButton} color="inherit" >Search</Button>
      </Grid>
      </Toolbar>
     </Card>
     </div>
     
  );
}