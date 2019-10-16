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
  
  
export default function PracticeAdminSearchBar(props) {
  const [values, setValues] = React.useState({
    practicename: '',
    npinumber: '',
    practiceadmin: '',
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
            Practice Admin Search
          </Typography>
          </Grid>
          <Grid item xs={3}>
          <Button color="inherit" className={classes.addButton}>Add Practice</Button>
          </Grid>
        </Toolbar>
      </AppBar>
   
    <Card className={classes.logo}>
    <Toolbar className={classes.toolbar}> 
    <Grid item xs={4}>
      <TextField
        id="standard-name"
        label="Practice Name"
        className={classes.textField}
        value={values.practicename}
        onChange={handleChange('practicename')}
        margin="normal"
      />
      </Grid>
      <Grid item xs={4}>
      <TextField
        id="standard-name"
        label="NPI Number"
        className={classes.textField}
        value={values.npinumber}
        onChange={handleChange('npinumber')}
        margin="normal"
      />
      </Grid>
    
      <Grid item xs={4}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="practiceadmin">Practice Admin</InputLabel>
        <Select
          value={values.practiceadmin}
          onChange={handleChange('practiceadmin')}
          inputProps={{
            name: 'Practice Admin',
            id: 'practiceadmin',
          }}
        >
          <MenuItem value={'Burris Lesia'}>Burris Lesia</MenuItem>
          <MenuItem value={'Bryant Jewel'}>Bryant Jewel</MenuItem>
          <MenuItem value={'Brewer Brittany'}>Burris Lesia</MenuItem>
          <MenuItem value={'Gamble Misty'}>Bryant Jewel</MenuItem>
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
