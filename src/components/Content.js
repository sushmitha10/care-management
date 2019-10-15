import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';  
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(theme => ({
    font: {
      flexGrow: 1,
      color: "#1b4297",
      fontSize: "22px",
      fontFamily: "WhitneyA",
      paddingTop: "40px",
      fontWeight: "bold",
    
    },
    fonttypo: {
        fontSize: "18px",
        paddingTop: "44px",
        fontFamily: "WhitneyB"
      },
    content: {
        display: "flex",
        margin: "20px",
        marginLeft: "140px",
        marginRight: "140px",
        
    },
    icon: {
        fontSize: "7rem",
        color: "#1b4297",
        paddingLeft: "20px",
    }
}));

export default function PhysicianAdminContent()  {
const classes = useStyles();
    return (
    <Card className={classes.content}>
        <Grid item xs={2}>
            <SettingsIcon className={classes.icon}/>
        </Grid>
        <Grid item xs={3}>
            <Typography className={classes.font}>The Physician Admin Screen</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography className={classes.fonttypo}>allows you to search for, edit and add physicians.</Typography>
      </Grid>
    </Card>
    );
}

export function WorkListContent() {
    const classes = useStyles();
    return (
        <Card className={classes.content}>
            <Grid item xs={2}>
                <SettingsIcon className={classes.icon}/>
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.font}>The Work List Screen </Typography>
            </Grid>
            <Grid item xs={5}>
                <Typography className={classes.fonttypo}>allows you to view and take action on the following items: pending description changes for practices</Typography>
          </Grid>
        </Card>
        );
}

export function PracticeAdminContent() {
    const classes = useStyles();
    return (
        <Card className={classes.content}>
            <Grid item xs={2}>
                <SettingsIcon className={classes.icon}/>
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.font}>The Practice Admin Screen </Typography>
            </Grid>
            <Grid item xs={5}>
                <Typography className={classes.fonttypo}>allows you to search for, edit and add Practices. </Typography>
          </Grid>
        </Card>
        );
}
