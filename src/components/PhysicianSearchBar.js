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
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
    root: {
        flexGrow: 1, 
        display: "block",
        marginLeft: "140px",
        marginRight: "140px", 
      },
    appBar: {
        backgroundColor: "#FFFFFF",
    },
    title: {
        display: "flex",
        color: "#000000",
    },
    addButton: {
        color: "#FFFFFF",
        backgroundColor: "#1e69d2",
    },
    toolbar: {
        margin: "1em"
    }
    
  }));
  
  
export default function PhysicianSearchBar(props) {
  const [values, setValues] = React.useState({
    lastName: '',
    deanumber: '',
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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
            Physician Search
          </Typography>
          </Grid>
          <Grid item xs={3}>
            <DropzoneDialog/>
          </Grid>
          <Grid item xs={3}>
          <Button color="inherit" className={classes.addButton}>Add Physician</Button>
          </Grid>
        </Toolbar>
      </AppBar>
   
    <Card className={classes.logo}>
    <Toolbar className={classes.toolbar}> 
    <Grid item xs={4}>
      <TextField
        id="standard-name"
        label="Last Name"
        className={classes.textField}
        value={values.lastName}
        onChange={handleChange('lastName')}
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
      <TextField
        id="standard-name"
        label="DEA Number"
        className={classes.textField}
        value={values.deanumber}
        onChange={handleChange('deanumber')}
        margin="normal"
      />
      </Grid>
    
      <Grid item xs={4}>
      <FormControl className={classes.formControl}>
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
      <Button onClick={handleClick} className={classes.addButton} color="inherit" >Search</Button>
      </Grid>
      </Toolbar>
     </Card>
     </div>
     
  );
}