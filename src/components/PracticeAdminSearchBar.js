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
import DropzoneDialog from './fileUpload';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
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
    active: false,
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
          <Button color="inherit" className={classes.addButton}>Add Physician</Button>
          </Grid>
        </Toolbar>
      </AppBar>
   
    <Card className={classes.logo}>
    <Toolbar className={classes.toolbar}> 
    <Grid item xs={4}>
        Practice Name
    <TextField
        id="standard-name"
        className={classes.textField}
        margin="normal"
        value={values.practicename}
        onChange={handleChange('practicename')}
      />
      </Grid>
      <Grid item xs={4}>
        NPI Number
    <TextField
        id="standard-name"
        className={classes.textField}
        margin="normal"
        value={values.npinumber}
        onChange={handleChange('npinumber')}
      />
      </Grid>
    <Grid item xs={3}>
    <Checkbox
        value={values.active}
        onChange={handleChange('active')}
       
      />
      Active 
      </Grid>
      <Grid item xs={2}>
      <Button onClick={handleClick} className={classes.addButton} color="inherit" >Search</Button>
      </Grid>
      </Toolbar>
     </Card>
     </div>
     
  );
}
// export function PracticeAdminSearchBar(props) {
//   const classes = useStyles();
//   const [values2, setValues2] = React.useState({
//     practicename: '',
//     active: false,
//   });
//   const handleChange = name => event => {
//     event.preventDefault()
//     setValues2({ ...values2, [name]: event.target.value2 });
//   };
//   const handleClick=function() {
//     props.value(values2)
    
//   };
//   return (
//     <div className={classes.root}>
//       <AppBar position="static" className={classes.appBar}>
//         <Toolbar>
//         <Grid item xs={6}>
//           <Typography variant="h6" className={classes.title}>
//             Practice Admin Search
//           </Typography>
//           </Grid>
//           <Grid item xs={6}>
//           <Button color="inherit" className={classes.addButton}>Add Physician</Button>
//           </Grid>
//         </Toolbar>
//       </AppBar>
   
//     <Card className={classes.logo}>
//     <Toolbar className={classes.toolbar}> 
//     <Grid item xs={4}>
//         Practice Name
//         <TextField
//         id="standard-name"
//         className={classes.textField}
//         margin="normal"
//         value={values2.practice}
//         onChange={handleChange('practicename')}
//       />
//       </Grid>
//       <Grid item xs={4}>
//         Practice Admin
//     <TextField
//         id="standard-name"
//         className={classes.textField}
//         margin="normal"
//       />
//       </Grid>
//     <Grid item xs={3}>
//     <Checkbox
//         value="checkedA"
       
//       />
//       Search Active Only
//       </Grid>
//       <Grid item xs={2}>
//       <Button onClick={handleClick} className={classes.addButton} color="inherit" >Search</Button>
//       </Grid>
//       </Toolbar>
//      </Card>
//      </div>
//   );
// }