import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

class MultiplePhysicians extends React.Component {
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