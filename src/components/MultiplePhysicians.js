import React, { Component } from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { withRouter } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

class MultiplePhysicians extends React.Component {
    constructor(props) {
      super(props);
      console.log(Object.values(this.props.location.state.fileUploadData));
      this.state = {
        columns: [
          {
            field: 'conflict',
            title: 'Data Conflict',
            // render: rowData => <Checkbox
            //   checked={false}
            //   onChange={handleChange('checkedA')}
            //   value="checkedA"
            //   inputProps={{
            //     'aria-label': 'primary checkbox',
            //   }}
            // />
          },
          { title: 'First Name', field: 'physicianFirstName' },
          { title: 'Last Name', field: 'physicianLastName' },
          { title: 'Middle Name', field: 'physicianMiddleName'},
          { title: 'Physician Title', field: 'physicianTitle'},
          { title: 'Practice', field: 'primaryPracticeName' },
          { title: 'Available Spots', field: 'spots', type: 'numeric', initialEditValue: 250 },
        ]
      }
    }

    componentDidUpdate() {
      console.log(this.props);
    }

    // getPhysicianData() {
    //   console.log(Object.values(this.props.location.state.fileUploadData));
    //   if(this.props.location.state.fileUploadData) {
    //     return Object.values(this.props.location.state.fileUploadData).map((val, index) => {
    //       return (
    //       <div key={index}>
    //         { val.physicianLastName }
    //       </div>
    //       );
    //     })
    //   }
    // }

    static tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    render() {
      return (
        <div>
          <MaterialTable
            title="Staging Preview"
            icons={MultiplePhysicians.tableIcons}
            columns={this.state.columns}
            data={Object.values(this.props.location.state.fileUploadData)}
            options={{
              // selection: true,
              // isFreeAction: true,
              actionsColumnIndex: -1
            }}
            // actions={[
            //   {
            //     tooltip: 'Remove All Selected Users',
            //     icon: 'delete',
            //     onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
            //   }
            // ]}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = Object.values(this.props.location.state.fileUploadData);
                      data.push(newData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      debugger;
                      const data = Object.values(this.props.location.state.fileUploadData);
                      console.log(data);
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = Object.values(this.props.location.state.fileUploadData);
                      const index = data.indexOf(oldData);
                      data.splice(index, 1);
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
            }}
          />
        </div>
      )
    }
  }

  export default withRouter(MultiplePhysicians);
