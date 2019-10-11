import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
        <Button color="inherit" className={classes.menuButton}>WORK LIST</Button>
        <Button color="inherit" className={classes.menuButton}>USER ADMIN</Button>
        <Button color="inherit" className={classes.menuButton}>PRACTICE ADMIN</Button>
        <Button color="inherit" className={classes.menuButton}>PHYSICIAN ADMIN</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
