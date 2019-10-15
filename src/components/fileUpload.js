import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import '../Styles.css';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
 
export default class DropzoneDialogExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: [],
            redirect: false
        };
    }
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files, 
            open: false
        });

        fetch('https://reqres.in/api/users', {
            // content-type header should not be specified!
            method: 'POST',
            body: files,
        })
            .then(response => response.json())
            .then(success => {
            // Do something with the successful response
            console.log('File saved successfully');
            // this.setState({
            //     redirect: true
            // });
            this.state.redirect = true;
            this.routeRedirect();
            console.log(this.state.redirect);
            })
            .catch(error => console.log(error)
        );
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }

    routeRedirect() {
        if(this.state.redirect) {
            return <Redirect to ="/multiplephysicians" />
        }
    }

    render() {
        return (
            <div className="App-button">
                <Button color="inherit" onClick={this.handleOpen.bind(this)}>
                  Add Multiple Physicians
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['.xls', '.xlsx']}
                    dropzoneText={' Drag and drop an excel file here or click to upload '}
                    showPreviews={true}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                />
                {/* <RouteRedirect /> */}
            </div>
        );
    }
}

// function RouteRedirect() {
//     return(
//         <Redirect to="/multiplephysicians"/> 
//     );
// }