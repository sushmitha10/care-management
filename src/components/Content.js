import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';  
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import { styles } from '../Stylesheet.css'


export default function PhysicianAdminContent()  {
const classes = styles();
    return (
    <Card className={classes.content}>
        <Grid item xs={1}>
            <SettingsIcon className={classes.contentIcon}/>
        </Grid>
        <Grid item xs={3}>
            <Typography className={classes.contentFont}>The Physician Admin Screen</Typography>
        </Grid>
        <Grid item xs={4}>
            <Typography className={classes.contentTypography}>allows you to search for, edit and add physicians.</Typography>
      </Grid>
    </Card>
    );
}

export function WorkListContent() {
    const classes = styles();
    return (
        <Card className={classes.content}>
            <Grid item xs={1}>
                <SettingsIcon className={classes.contentIcon}/>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.contentFont}>The Work List Screen </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography className={classes.contentTypography}>allows you to view and take action on the following items: pending description changes for practices</Typography>
          </Grid>
        </Card>
        );
}

export function PracticeAdminContent() {
    const classes = styles();
    return (
        <Card className={classes.content}>
            <Grid item xs={1}>
                <SettingsIcon className={classes.contentIcon}/>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.contentFont}>The Practice Admin Screen </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography className={classes.contentTypography}>allows you to search for, edit and add Practices. </Typography>
          </Grid>
        </Card>
        );
}

export function UserAdminContent() {
    const classes = styles();
    return (
        <Card className={classes.content}>
            <Grid item xs={1}>
                <SettingsIcon className={classes.contentIcon}/>
            </Grid>
            <Grid item xs={2}>
                <Typography className={classes.contentFont}>The User Admin Screen </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography className={classes.contentTypography}>allows you to search for, edit, add and deactivate Users.  </Typography>
          </Grid>
        </Card>
        );
}

export function PhysicianProfileContent() {
    const classes = styles();
    return (
        <Card className={classes.content}>
            <Grid item xs={1}>
                <SettingsIcon className={classes.contentIcon}/>
            </Grid>
            <Grid item xs={3}>
                <Typography className={classes.contentFont}>The Physician Profile Screen </Typography>
            </Grid>
           
                <Typography className={classes.contentTypography}>allows you to edit, add, or deactivate physicians, including managing their locations. </Typography>
  
        </Card>
        );
}