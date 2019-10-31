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
        color: "#1b4297",
        paddingLeft: "40px",
        fontSize: "7rem !important",
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
        flexGrow: "1", 
        display: "block",
    },
    // menuAppBarButton: {
    //     margin: "5em !important",
    // },
    menuAppBar: {
        paddingLeft: "100px",
        paddingRight: "50px",
        position: "static !important",
        backgroundColor: "#1E69D2 !important",
        borderRadius: "4px",
    },
    menuToolBar: {
        color: "#000000", 
    },
    // menuTable: {
    //     marginLeft: "140px",
    //     marginRight: "140px",
    // },
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
        backgroundColor: "#1E69D2 !important",
    },
    searchTitle: {
        display: "flex",
        color: "#FFFFFF",
    },
    searchAddButton: {
      paddingLeft: "4em !important",
      paddingRight: "4em !important",
      border: "none",
      backgroundColor: "#00a890 !important",
      color: "black !important",
      textAlign: "center !important",
      display: "inline-block !important",
      fontSize: "15px",
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
            paddingLeft: "4em !important",
            paddingRight: "4em !important",
            border: "none",
            color: "white !important",
            textAlign: "center !important",
            display: "inline-block !important",
            fontSize: "15px",
        },
        menuAppTitle: {
          flexGrow: 1,
        },
        appBar: {
          
          paddingRight: "50px",
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
          adminSearchFormControl: {
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
            },
              userFormControl: {
                  margin: '80px',
                  minWidth: 250,
                },
                  userRoot: {
                      flexGrow: 1, 
                      display: "block",
                      marginLeft: "140px",
                      marginRight: "140px", 
                    },
                  userAppBar: {
                      backgroundColor: "#FFFFFF",
                  },
                  userTitle: {
                      display: "flex",
                      color: "#000000",
                  },
                  userAddButton: {
                      color: "#FFFFFF",
                      backgroundColor: "#1e69d2",
                  },
                  userToolbar: {
                      margin: "1em"
                  },
                   userContainer: {
                      display: 'flex',
                      flexWrap: 'wrap',
                      marginLeft: '140px',
                      marginRight: '140px',
                  },
                  userTextField: {
                      margin: '80px',
                  },
          
 })
)

 export { styles } 