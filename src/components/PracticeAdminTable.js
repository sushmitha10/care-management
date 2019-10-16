import React from 'react';
import MaterialTable from 'material-table';

export default function PracticeAdminTable(props) {
  const rawdata = [
    { practicename: 'Abdelmalik, Maged M.D.', active: 'Y', practiceadmin: 'Brewer Brittany', npinumber: '12345'},
    { practicename: 'Abou Jaoude, Dory M.D.', active: 'N', practiceadmin: 'Bryant Jewel', npinumber: '13455'},
    { practicename: 'Abraham, Sarada M.D.', active: 'Y', practiceadmin: 'Burris Lesia', npinumber: '13455'},
    { practicename: 'Abraham, Sheryn M.D.', active: 'Y', practiceadmin: 'Gamble Misty', npinumber: '13455'},
    { practicename: 'Anderson, Jeffrey M.D.', active: 'N', practiceadmin: 'Gossage Abigail', npinumber: '13455'},
    { practicename: 'Zerbe, Cathleen N.P.', active: 'Y', practiceadmin: 'Hancock Melissa', npinumber: '13455' },
    { practicename: 'Zimmermann, Stephen M.D.', active: 'Y', practiceadmin: 'Howell Kim', npinumber: '13455'},
    { practicename: 'Zielinski, David M.D.', active: 'N', practiceadmin: 'Jacobs Gwen', npinumber: '13455' },
    { practicename: 'russell', active: 'Y', practiceadmin: 'Lavender Audrie', npinumber: '13455' },
    { practicename: 'dereck', active: 'Y', practiceadmin: 'Jacobs Gwen', npinumber: '13455'},
    { practicename: 'Swathi', active: 'N' , practiceadmin: 'Gossage Abigail', npinumber: '167455'},
    { practicename: 'ajay', active: 'Y' , practiceadmin: 'Burris Lesia', npinumber: '13455'},
  ];

   const columns= [
      { title: 'Practice Name', field: 'practicename' },
      { title: 'NPI Number', field: 'npinumber'},
      { title: 'Practice Admin', field: 'practiceadmin'},
      { title: 'Active', field: 'active' },
    ]
   const data= (()=>{
      let dataCopy = JSON.parse(JSON.stringify(rawdata))
    dataCopy = props.value.practicename? dataCopy.filter(d=>d.practicename.includes(props.value.practicename)): dataCopy
    dataCopy = props.value.npinumber? dataCopy.filter(d=>d.npinumber.includes(props.value.npinumber)): dataCopy
    dataCopy = props.value.practiceadmin? dataCopy.filter(d=>d.practiceadmin.includes(props.value.practiceadmin)): dataCopy
    dataCopy = props.value.activeonly? dataCopy.filter(d=>d.active==='Y'): dataCopy
    console.log(JSON.stringify(props));
      return dataCopy
    })();

 

  return (
    <MaterialTable
      title="Physician Search"
      columns={columns}
      data={data}
      options={{
        search: false,
        // filtering: true
      }}
      
    />
  );
}
