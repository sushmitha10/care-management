import React from 'react';
import MaterialTable from 'material-table';

export default function PracticeAdminTable(props) {
  const rawdata = [
    { practicename: 'Mehmet', active: 'Y', npinumber: '65'},
    { practicename: 'russell', active: 'N', npinumber: '65' },
    { practicename: 'Zach', active: 'Y', npinumber: '65' },
    { practicename: 'smith', active: 'Y', npinumber: '65'},
    { practicename: 'sush', active: 'N', npinumber: '65' },
    { practicename: 'nikhil', active: 'Y', npinumber: '65' },
    { practicename: 'lorenzo', active: 'Y', npinumber: '65'},
    { practicename: 'robert', active: 'N', npinumber: '65' },
    { practicename: 'michelle', active: 'Y', npinumber: '65' },
    { practicename: 'dereck', active: 'Y', npinumber: '65'},
    { practicename: 'Swathi', active: 'N' , npinumber: '65'},
    { practicename: 'ajay', active: 'Y' , npinumber: '65'},
  ];
  const [state, setState] = React.useState({
    columns: [
      { title: 'Practice Name', field: 'practicename' },
      { title: 'Active', field: 'active' },
      { title: 'NPI Number', field: 'npinumber'},
    ],
    data: rawdata
  });

  return (
    <MaterialTable
      title="Practice Admin Table"
      columns={state.columns}
      data={state.data}
      options={{
        search: false,
        filtering: true
      }}
      
    />
  );
}
