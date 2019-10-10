import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { textAlign } from '@material-ui/system';

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
        backgroundColor: "#3c6fdd",
        
      },
      toolBar: {
        color: "#FFFFFF", 
      }
  }));

export default function Menu() {
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
