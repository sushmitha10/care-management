import React from 'react';
import MaterialTable from 'material-table';

export default function PhysicianTable(props) {
  const rawdata = [
    { name: 'Mehmet', active: 'Y', practice: 'Robert', spots: '65'},
    { name: 'russell', active: 'N', practice: 'Robert', spots: '65' },
    { name: 'Zach', active: 'Y', practice: 'Robert', spots: '65' },
    { name: 'smith', active: 'Y', practice: 'Robert', spots: '65'},
    { name: 'sush', active: 'N', practice: 'Robert', spots: '65' },
    { name: 'nikhil', active: 'Y', practice: 'Robert', spots: '65' },
    { name: 'lorenzo', active: 'Y', practice: 'Robert', spots: '65'},
    { name: 'robert', active: 'N', practice: 'Robert', spots: '65' },
    { name: 'michelle', active: 'Y', practice: 'Robert', spots: '65' },
    { name: 'dereck', active: 'Y', practice: 'Robert', spots: '65'},
    { name: 'Swathi', active: 'N' , practice: 'Robert', spots: '65'},
    { name: 'ajay', active: 'Y' , practice: 'Robert', spots: '65'},
  ];
  const [state, setState] = React.useState({
    columns: [
      { title: 'Physician Name', field: 'name' },
      { title: 'Active', field: 'active' },
      { title: 'Practice', field: 'practice'},
      {
        title: 'Available Spots',
        field: 'spots'
      }
    ],
    data: rawdata.filter(d=>d.name===props.value.lastName)
  });

  return (
    <MaterialTable
      title="Physician Search"
      columns={state.columns}
      data={state.data}
      options={{
        search: false
      }}
      
    />
  );
}