import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import '../Styles.css';
import MultiplePhysicians from './MultiplePhysicians';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
 
export default class ProviderDropzoneDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			files: [],
			formDataFileUploadBody: {},
			providers: []
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

		fetch('http://10.4.242.161:9091/acm/web/provider/multiple', {
			method: 'POST',
			body: formDataFileUploadBody
		})
		.then((response) => { 
			response.json().then((data) => { 
				this.setState({providers: data.providerMap});
				// console.log(this.state.providers);
			} );
		})
		.then(success => {
			// Do something with the successful response
			console.log('File uploaded successfully');
		})
		.catch(error => console.log(error));
	}

	handleOpen() {
		this.setState({
			open: true,
		});
	}

	routeRedirect() {
		if(this.state.providers.PENDING) {
			return <Redirect push to = {{
				pathname: "/multiplephysicians",
				state: {
					fileUploadData: this.state.providers
				}
			}}
			/>
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
				<div className="App-grid">               
					{
						this.routeRedirect()
					}
				</div>
			</div>   
		);
	}
}