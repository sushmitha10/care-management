import React from 'react';
import MaterialTable from 'material-table';

export default function PhysicianTable(props) {
  const rawdata = [
    { name: 'Mehmet', active: 'Y', practice: 'anderson', spots: '23/63' },
    { name: 'sush', active: 'N', practice: 'robert', spots: '63/567' },
    { name: 'sathish', active: 'Y', practice: 'albert', spots: '63/299' },
  ];
  const [state, setState] = React.useState({
    columns: [
      { title: 'Physician Last Name', field: 'name' },
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
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      options={{
        search: false
      }}
      
    />
  );
}