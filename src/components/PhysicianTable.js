import React from 'react';
import MaterialTable from 'material-table';

export default function PhysicianTable(props) {
  const rawdata = [
    { name: 'Abdelmalik, Maged M.D.', active: 'Y', practice: 'St. Vincents Ambulatory Care, Inc.', spots: '65'},
    { name: 'Abou Jaoude, Dory M.D.', active: 'N', practice: 'Via Christi Clinic Murdock', spots: '65' },
    { name: 'Abraham, Sarada M.D.', active: 'Y', practice: 'Columbia St. Marys Hospital - Milwaukee', spots: '65' },
    { name: 'Abraham, Sheryn M.D.', active: 'Y', practice: 'Childrens Medical Group', spots: '65'},
    { name: 'Anderson, Jeffrey M.D.', active: 'N', practice: 'Alabama Providence Healthcare Services, Inc.', spots: '65' },
    { name: 'Zerbe, Cathleen N.P.', active: 'Y', practice: 'American Health Network of Indiana, LLC', spots: '65' },
    { name: 'Zimmermann, Stephen M.D.', active: 'Y', practice: 'RoMurfreesboro Medical Clinic, P.A.	bert', spots: '65'},
    { name: 'Zielinski, David M.D.', active: 'N', practice: '	Ascension Our Lady of Victory Hospital', spots: '65' },
    { name: 'michelle', active: 'Y', practice: 'Good Health Associates, PLLC', spots: '65' },
    { name: 'dereck', active: 'Y', practice: 'Wheaton Franciscan Medical Group', spots: '65'},
    { name: 'Swathi', active: 'N' , practice: 'Wheaton Franciscan Medical Group', spots: '65'},
    { name: 'ajay', active: 'Y' , practice: 'Wheaton Franciscan Medical Group', spots: '65'},
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
    data: rawdata
  });
 

  return (
    <MaterialTable
      title="Physician Search"
      columns={state.columns}
      data={state.data}
      options={{
        search: true,
        filtering: true
      }}
      
    />
  );
}