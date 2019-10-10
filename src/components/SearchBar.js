import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1, 
        display: "block",
        marginLeft: "140px",
        marginRight: "140px", 
      },
    appBar: {
        backgroundColor: "#3c6fdd",
    },
    title: {
        display: "flex",
    },
    addButton: {
        marginLeft: "26rem",
    },
    textField: {
        // margin: "3em"
    },
    toolbar: {
        margin: "1em"
    }
    
  }));

export default function SearchBar() {
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
          {<DropzoneDialog>

            </DropzoneDialog>}
          <Grid item xs={6}>
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
      Active Only
      </Grid>
      <Grid item xs={2}>
      <Button color="inherit" >Search</Button>
      </Grid>
      </Toolbar>
     </Card>
     </div>
  );
}