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
import DropzoneDialog from './FileUpload';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
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
  
  
export default function SearchBar(props) {
  const [values, setValues] = React.useState({
    lastName: '',
    deanumber: '',
    birthyear: '',
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
        Last Name
    <TextField
        id="standard-name"
        className={classes.textField}
        margin="normal"
        value={values.lastName}
        onChange={handleChange('lastName')}
      />
      </Grid>
      <Grid item xs={4}>
        DEA Number
    <TextField
        id="standard-name"
        className={classes.textField}
        margin="normal"
        value={values.deanumber}
        onChange={handleChange('deanumber')}
      />
      </Grid>
      <Grid item xs={3}>
      Practice
      <Select
      label="Practice"
      value={values.birthyear}
      onChange={handleChange('birthyear')}
    />
    </Grid>
    <Grid item xs={3}>
    <Checkbox
        value={values.activeonly}
        onChange={handleChange('activeonly')}
       
      />
      Active Only
      </Grid>
      <Grid item xs={2}>
      <Button onClick={handleClick} className={classes.addButton} color="inherit" >Search</Button>
      </Grid>
      </Toolbar>
     </Card>
     </div>
     
  );
}
export function PracticeAdminSearchBar() {
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
        Practice Name
    <TextField
        id="standard-name"
        className={classes.textField}
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
        Practice Admin
    <TextField
        id="standard-name"
        className={classes.textField}
        margin="normal"
      />
      </Grid>
      <Grid item xs={3}>
      Practice
      <Select
      label="Practice"
      value="All"
    />
    </Grid>
    <Grid item xs={3}>
    <Checkbox
        value="checkedA"
       
      />
      Search Active Only
      </Grid>
      <Grid item xs={2}>
      <Button className={classes.addButton} color="inherit" >Search</Button>
      </Grid>
      </Toolbar>
     </Card>
     </div>
  );
}