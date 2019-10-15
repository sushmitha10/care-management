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
    data: rawdata.filter(d=>d.practicename===props.value.practicename)
  });

  return (
    <MaterialTable
      title="Practice Admin Search"
      columns={state.columns}
      data={state.data}
      options={{
        search: false
      }}
      
    />
  );
}

// export function PracticeAdminTable(props) {
//   const rawdata2 = [
//     { practicename: 'Mehmet', active: 'Y' },
//     { practicename: 'russell', active: 'N' },
//     { practicename: 'Zach', active: 'Y' },
//     { practicename: 'smith', active: 'Y'},
//     { practicename: 'sush', active: 'N' },
//     { practicename: 'nikhil', active: 'Y' },
//     { practicename: 'lorenzo', active: 'Y'},
//     { practicename: 'robert', active: 'N' },
//     { practicename: 'michelle', active: 'Y' },
//     { practicename: 'dereck', active: 'Y'},
//     { practicename: 'Swathi', active: 'N' },
//     { practicename: 'ajay', active: 'Y' },
//   ];
//   const [state, setState] = React.useState({
//     columns2: [
//       { title: 'Practice Admin Name', field: 'practicename' },
//       { title: 'Search Active Only', field: 'active' },
//     ],
//     data2: rawdata2.filter(d=>d.practicename===props.value.practicename)
//   });

//   return (
//     <PracticeAdminTable
//       title="Practice Admin Search"
//       columns2={state.columns2}
//       data2={state.data2}
//       options={{
//         search: false
//       }}
      
//     />
//   );
// }