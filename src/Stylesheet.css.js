// import { StyleSheet } from 'react-native'
import { makeStyles } from '@material-ui/core/styles';
  

const styles = makeStyles(theme => ({
   contentFont: {
      flexGrow: 1,
      color: "#1b4297",
      fontSize: "22px",
      fontFamily: "WhitneyA",
      paddingTop: "40px",
      fontWeight: "bold",
    
    },
    contentTypography: {
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
    contentIcon: {
        fontSize: "7rem",
        color: "#1b4297",
        paddingLeft: "40px",
    },
    headerFont: {
      flexGrow: 1,
      color: "#1b4297",
      fontSize: "38px",
      fontFamily: "WhitneyA",
      paddingTop: "40px",
    
    },
    headerFonth1: {
        color: "#1b4297",
        fontSize: "44px",
        fontWeight: "bold",
        fontFamily: "WhitneyA"
      },
    headerLogo: {
        display: "flex",
        boxShadow: "none",
    },
    menuAppBarRoot: {
        flexGrow: 1, 
        display: "block",
        marginLeft: "140px",
        marginRight: "140px", 
    },
    menuAppBarButton: {
        paddingRight: "120px",
    },
    menuAppBar: {
        paddingLeft: "150px",
        position: "static",
        backgroundColor: "#FFFFFF",
    },
    menuToolBar: {
        color: "#000000", 
    },
    menuTable: {
        marginLeft: "140px",
        marginRight: "140px",
    },
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: '140px',
          marginTop: '30px',
          marginRight: "140px", 
        },
        textField: {
          padding: "100px"
        },
        dense: {
          marginTop: 19,
        },
        menu: {
          width: 200,
        },
        title: {
            display: "flex",
            color: "#000000",
        },
        bigAvatar: {
            margin: "50px 10px 50px",
            width: 150,
            height: 150,
          },
          appBar: {
            paddingLeft: "30px",
            position: "static",
            backgroundColor: "#FFFFFF",
          },
          toolBar: {
            color: "#000000", 
          },
          box: {
            display: "contents",
          },
          typography: {
            marginTop: "30px"
          },
          searchFormControl: {
            margin: theme.spacing(1),
            minWidth: 250,
  },
    searchRoot: {
        flexGrow: 1, 
        display: "block",
        marginLeft: "140px",
        marginRight: "140px", 
      },
    searchAppBar: {
        backgroundColor: "#FFFFFF",
    },
    searchTitle: {
        display: "flex",
        color: "#000000",
    },
    searchAddButton: {
        color: "#FFFFFF",
        backgroundColor: "#1e69d2",
    },
    searchToolbar: {
        margin: "1em"
    },
      menuAppRoot: {
          flexGrow: 1, 
          display: "block",
          marginLeft: "140px",
          marginRight: "140px", 
        },
        menuAppButton: {
            paddingRight: "120px",
        },
        menuAppTitle: {
          flexGrow: 1,
        },
        appBar: {
          paddingLeft: "150px",
          position: "static",
          backgroundColor: "#FFFFFF",
          
        },
        menuAppToolBar: {
          color: "#000000", 
        },
        menuAppTable: {
          marginLeft: "140px",
          marginRight: "140px",
        },
          formControl: {
            margin: theme.spacing(1),
            minWidth: 250,
          },
            adminSearchRoot: {
                flexGrow: 1, 
                display: "block",
                marginLeft: "140px",
                marginRight: "140px", 
              },
              adminSearchAppBar: {
                backgroundColor: "#FFFFFF",
            },
            adminSearchTitle: {
                display: "flex",
                color: "#000000",
            },
            adminSearchAddButton: {
                color: "#FFFFFF",
                backgroundColor: "#1e69d2",
            },
            adminSearchToolbar: {
                margin: "1em"
            }
 })
)
 const buttons = makeStyles(theme => ({
   primary: {
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   }
 })
)

 export { styles, buttons } 