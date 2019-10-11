import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import '../Styles.css';
 
export default class DropzoneDialogExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
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

        fetch('https://path/to/api', {
            // content-type header should not be specified!
            method: 'POST',
            body: files,
        })
            .then(response => response.json())
            .then(success => {
            // Do something with the successful response
            console.log('File saved successfully');
            })
            .catch(error => console.log(error)
        );
    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
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
            </div>
        );
    }
}