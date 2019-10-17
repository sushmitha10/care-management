import React, { Component } from 'react'
import MaterialTable from 'material-table'
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { forwardRef } from 'react';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import SearchIcon from '@material-ui/icons/Search';

class MultiplePhysicians extends React.Component {
    static tableIcons = {
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />)
      };

    render() {
      return (
        <MaterialTable
          columns={[
            { title: 'First Name', field: 'first' },
            { title: 'Last Name', field: 'last' },
            { title: 'Practice', field: 'practice' },
            { title: 'Available Spots', field: 'spots', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { first: 'Mehmet', last: 'Baran', practice: 'St. Vincents Ambulatory Care, Inc.', spots: '25', birthCity: 63 },
            { first: 'Zerya Betül', last: 'Jones', practice: 'Via Christi Clinic Murdock', spots: '50', birthCity: 63 },
            { first: 'Apryl', last: 'Johnson', practice: 'Via Christi Clinic Murdock', spots: '10', birthCity: 63 },

          ]}
          title="Multiple Physicians Import View"
          icons={MultiplePhysicians.tableIcons}
          detailPanel={rowData => {
            return (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            )
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
      )
    }
  }

  export default MultiplePhysicians;