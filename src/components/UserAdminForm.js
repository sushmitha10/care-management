import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: '80px',
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
        },
         container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '140px',
            marginRight: '140px',
        },
        textField: {
            margin: '80px',
        },
 
}));

export default function UserAdminForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
      
    <form className={classes.container} noValidate autoComplete="off">
        <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
            Practice Admin Search
          </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid xs='3'>
      <TextField
        id="standard-name"
        label="User Last Name"
        className={classes.textField}
        value={values.lastName}
        onChange={handleChange('lastName')}
        margin="normal"
      />
      </Grid>
      <Grid xs='6'>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="userRole">User Role</InputLabel>
        <Select
          value={values.userRole}
          onChange={handleChange}
          inputProps={{
            name: 'userRole',
            id: 'userRole',
          }}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Application Admin</MenuItem>
          <MenuItem value={30}>Dependent Member</MenuItem>
          <MenuItem value={20}>Market Admin</MenuItem>
          <MenuItem value={30}>Practice Member</MenuItem>
          <MenuItem value={20}>PRI Survey</MenuItem>
          <MenuItem value={30}>Primary Member</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid xs='4'>
      <TextField
        id="standard-name"
        label="User First Name"
        className={classes.textField}
        value={values.firstName}
        onChange={handleChange('firstName')}
        margin="normal"
      />
      </Grid>
    </form>

  );
}
