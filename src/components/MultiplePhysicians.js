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
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { first: 'Mehmet', last: 'Baran', birthYear: 1987, birthCity: 63 },
            { first: 'Zerya Betül', last: 'Baran', birthYear: 1987, birthCity: 63 },
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