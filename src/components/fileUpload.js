import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import '../Styles.css';
 
export default class ProviderDropzoneDialog extends Component {
	    constructor(props) {
		            super(props);
		            this.state = {
				                open: false,
				                files: [],
				                formDataFileUploadBody: {},
				                providers: {}
				            };
		        }
	 
	    handleClose() {
		            this.setState({
				                open: false
				            });
		        }
	 
	    handleSave(files, formDataFileUploadBody) { 
		            formDataFileUploadBody = new FormData();
		            formDataFileUploadBody.append('file',  files[0]);

		            this.setState({
				                
				                files: files, 
				                open: false,
				                formDataFileUploadBody: formDataFileUploadBody
				            });
		            fetch('http://127.0.0.1:9091/acm/web/provider/multiple', {
				                method: 'POST',
				                body: formDataFileUploadBody
				            }).
			                then((response) => { 
						                response.json().then((data) => { 
									                    debugger;
									                    this.setState({providers: data});
									            } );
						        });

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
				                            <div className="App-grid">               
				                            {/* <li key={this.state.providers.physicianLastName}>{this.state.providers.physicianLastName}</li> */}
	                       
	                </div>
		            </div>
		            
		        );
    }
}