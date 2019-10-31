import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MaterialTable from 'material-table';
import { styles } from '../Stylesheet.css';
  
export default function PhysicianProfile() {
  const classes = styles();
    const [values, setValues] = React.useState({
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      currency: 'EUR',
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
            Edit Physician
          </Typography>
          
          </Grid>
        
        </Toolbar>
      
      </AppBar>
  
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid>
                <Avatar alt="Remy Sharp" src="../images/PhotoMissing.png" className={classes.bigAvatar} />
            </Grid>
            <TextField
        id="outlined-full-width"
        label="Current Text"
        style={{ margin: 60 }}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Toolbar>
      
      </AppBar>
        <Typography className={classes.typography}>
          * Denotes that field is visible to members in physician profiles
          </Typography>
      <Grid container alignItems="flex-start">
    
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Patient Spots"
                    value={values.patientSpots}
                    onChange={handleChange('patientSpots')}
                    margin="normal"
                    className={classes.textfield}
                    />
                </Grid>
              
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Status"
                    value={values.status}
                    onChange={handleChange('status')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Middle Name"
                    value={values.middleName}
                    onChange={handleChange('middleName')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange('email')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Medical School"
                    value={values.medicalSchool}
                    onChange={handleChange('medicalSchool')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Residency Location"
                    value={values.residencyLocation}
                    onChange={handleChange('residencyLocation')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Degree"
                    value={values.degree}
                    onChange={handleChange('degree')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="Fellowship Location"
                    value={values.fellowshipLocation}
                    onChange={handleChange('fellowshipLocation')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="NPI Number"
                    value={values.npiNumber}
                    onChange={handleChange('npiNumber')}
                    margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="standard-name"
                    label="TPA ID Number"
                    value={values.tpaIdNumber}
                    onChange={handleChange('tpaIdNumber')}
                    margin="normal"
                    />
                </Grid>
                <Grid>
                <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
 
      </Grid>
      <Grid item xs={12}> <Typography className={classes.typography}>
                Note: Please enter ONLY Physician Phone and Fax IF specific to the physician, otherwise the location numbers will be displayed
          </Typography></Grid>
               
                </Grid>
                <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
          Physician Locations
          </Typography>
          
          </Grid>
        
        </Toolbar>
      
      </AppBar> 
                <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
          Member Roster - Breakdown of Current Members
          </Typography>
          
          </Grid>
        
        </Toolbar>
      
      </AppBar>  
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
          Member Roster - Current Members

          </Typography>
          
          </Grid>
        
        </Toolbar>
      
      </AppBar>  
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
          Member Roster - Future/Pending Members

          </Typography>
          
          </Grid>
        
        </Toolbar>
      
      </AppBar>  
        </form>
    );
}  