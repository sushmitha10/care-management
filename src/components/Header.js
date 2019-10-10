import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';  
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Auth from "../Auth";

const useStyles = makeStyles(theme => ({
    font: {
      flexGrow: 1,
      color: "#1b4297",
      fontSize: "38px",
      fontFamily: "WhitneyA",
      paddingTop: "40px",
    
    },
    fonth1: {
        color: "#1b4297",
        fontSize: "44px",
        fontWeight: "bold",
        fontFamily: "WhitneyA"
      },
    logo: {
    display: "flex",
    boxShadow: "none",
    },
  }));

  export default function Header()  {
    const classes = useStyles();
    const auth = new Auth();

        return (
    <Card className={classes.logo}>
        
        <Grid item xs={12} sm={6}>
         <img src = "https://myacmprovider.com/_images/ascension_cm_logo.png"  width="500"></img>
        </Grid>
          
        <Grid item xs={12} sm={6}>
        <Typography className={classes.font} variant="h2" component="p">
          Designate your
        </Typography>
        <Typography className={classes.fonth1} variant="h1" component="p">
        Primary Care Provider
        </Typography>
        <Typography>
        
      <Link href={"#"} className={classes.link}>
        Help
      </Link>
      |
      <Link href={"#"} variant="body2" className={classes.link}>
        Change Password 
      </Link>
      |
      <Link href={"#"} variant="body2" className={classes.link}>
        Change Email 
      </Link>
      |
      <Link href={"#"} variant="body2" className={classes.link}>
        Reports 
      </Link>
      |
      <Link href={"#"} variant="body2" className={classes.link} onClick={() => auth.logout()}>
        Logout
      </Link>
    </Typography>
        </Grid>
    
         </Card>
        );
}
