import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';  
import Link from '@material-ui/core/Link';
import Auth from "../Auth";
import { styles } from '../Stylesheet.css'

export default function Header()  {
    const classes = styles();
    const auth = new Auth();

    return (
      <Card className={classes.headerLogo}>
          
        <Grid item xs={12} sm={6}>
          <img src = "https://myacmprovider.com/_images/ascension_cm_logo.png"  width="500" alt="Ascension Care Management Logo"></img>
        </Grid>
          
        <Grid item xs={12} sm={6}>
          <Typography className={classes.headerFont} variant="h2" component="p">
            Designate your
          </Typography>
          <Typography className={classes.headerFonth1} variant="h1" component="p">
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
            <Link href={"#"} variant="body2" className={classes.link} onClick={() => auth.headerLogout()}>
              Logout
            </Link>
          </Typography>
        </Grid>
      </Card>
    );
}
